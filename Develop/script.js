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
    console.log("placeholder");
  } else {
    alert("Password to short!");
  }

  // Prompts user for the following password preferences
  var inputLower = prompt("Would you like to include lowercase letters? Enter Yes or No");
  inputLower = inputLower[0].toLowerCase();

  var inputUpper = prompt("Would you like to include uppercase letters? Enter Yes or No");
  inputUpper = inputUpper[0].toLowerCase();

  var inputNumbers = prompt("Would you like to include numbers? Enter Yes or No");
  inputNumbers = inputNumbers[0].toLowerCase();

  var inputSpecial = prompt("Would you like to include special characters? Enter Yes or No");
  inputSpecial = inputSpecial[0].toLowerCase();

  var password = '';
  var userPreference = '';

  // Check to make sure user did not answer no to every prompt
  if (inputLower == 'n' && inputUpper == 'n' && inputNumbers == 'n' && inputSpecial == 'n') {
    alert("You can't have a password with no characters!")
    generatePassword();
  }

  // Check to make sure user entered valid answers for each prompt

  if ((inputLower != 'y' && inputLower != 'n') || (inputUpper != 'y' && inputUpper != 'n') || (inputNumbers != 'y' && inputNumbers != 'n') || (inputSpecial != 'y' && inputSpecial != 'n')) {
    alert("Invalid: Enter either Yes or No")
    generatePassword();
  }

  // Checks all cases and adds the string if user input == 'y'

  if (inputLower == 'y') {
    userPreference += lowercase;
  }
  if (inputUpper == 'y') {
    userPreference += uppercase;
  }
  if (inputNumbers == 'y') {
    userPreference += numbers;
  }
  if (inputSpecial == 'y') {
    userPreference += special;
  }
  //creates random password, based on the users preferred length, with the new 
  // user preference string determined by the users inputs

  for (var i = 0; i < inputLength; i++) {
    var randomNumber = Math.floor(Math.random() * userPreference.length);
    password += userPreference.substring(randomNumber, randomNumber + 1);
  }
  // alerts and returns password in the box

  alert("Password:    " + password);
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
