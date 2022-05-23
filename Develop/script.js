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


  var inputChars = prompt("Would you like to include lowercase letters? Enter y or n");

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
