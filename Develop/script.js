// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var inputLength = parseInt(prompt("Choose a length between 8 and 128"));

  if (inputLength >= 8 && inputLength <= 128) {

  } else {
    alert("Password to short!");
  }

  var inputLower = prompt("Would you like to include lowercase letters? Enter y or n");
  inputLower = inputLower.toLowerCase();
  
  var inputUpper = prompt("Would you like to include uppercase letters? Enter y or n");
  inputUpper = inputUpper.toLowerCase();

  var inputNumbers = prompt("Would you like to include numbers? Enter y or n");
  inputNumbers = inputNumbers.toLowerCase();

  var inputSpecial = prompt("Would you like to include special characters? Enter y or n");
  inputSpecial = inputSpecial.toLowerCase();

  return '';

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
