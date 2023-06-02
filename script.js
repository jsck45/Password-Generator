// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  // Prompt User for password length
  var passwordLength = parseInt(prompt("How many characters do you need in your password?"));

  // Validate the password length
  while (!passwordLength || passwordLength < 7 || passwordLength > 129) {
    if (!passwordLength) {
      passwordLength = parseInt(prompt("Please choose a number between 8 and 128"));
    } else if (passwordLength < 7) {
      passwordLength = parseInt(prompt("Password must be at least 8 characters."));
    } else if (passwordLength > 129) {
      passwordLength = parseInt(prompt("Password can be a maximum of 128 characters."));
    }
  }
  
  // Confirm the password criteria
  var confirmLowerCase = confirm("Do you wish to include lowercase letters?");
  var confirmUpperCase = confirm("Do you wish to include uppercase letters?");
  var confirmNumber = confirm("Do you wish to include numbers?");
  var confirmSpecialChar = confirm("Do you wish to include special characters?");

  // Validate at least one criteria selected
  while (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumber === false &&
    confirmSpecialChar === false
  ) {
    alert("You must choose at least one parameter.");
    confirmLowerCase = confirm("Do you wish to include lowercase letters?");
    confirmUpperCase = confirm("Do you wish to include uppercase letters?");
    confirmNumber = confirm("Do you wish to include numbers?");
    confirmSpecialChar = confirm("Do you wish to include special characters?");
  }

  // Generate the available character pool
  var availableChars = [];

  if (confirmLowerCase) {
    availableChars = availableChars.concat(lowerCase);
  }

  if (confirmUpperCase) {
    availableChars = availableChars.concat(upperCase);
  }

  if (confirmNumber) {
    availableChars = availableChars.concat(number);
  }

  if (confirmSpecialChar) {
    availableChars = availableChars.concat(specialChar);
  }

  // Generate the password
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);