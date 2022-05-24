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
  var inputLower = prompt("Would you like to include lowercase letters? Enter y or n");
  inputLower = inputLower[0].toLowerCase();
  console.log(inputLower);
  
  var inputUpper = prompt("Would you like to include uppercase letters? Enter y or n");
  inputUpper = inputUpper[0].toLowerCase();

  var inputNumbers = prompt("Would you like to include numbers? Enter y or n");
  inputNumbers = inputNumbers[0].toLowerCase();

  var inputSpecial = prompt("Would you like to include special characters? Enter y or n");
  inputSpecial = inputSpecial[0].toLowerCase();

  var password = '';
  var userPreference = '';

  // Checks user input and sets the userPreference string as such
  if (inputLower == 'n' && inputUpper == 'n' && inputNumbers == 'n' && inputSpecial == 'n'){
    alert("You have to have some type of character!")
    generatePassword();
  }

  if (inputLower == 'y'){
    userPreference += lowercase;
  }
  if (inputUpper == 'y'){
    userPreference += uppercase;
  }
  if(inputNumbers == 'y'){
    userPreference += numbers;
  }
  if(inputSpecial == 'y'){
    userPreference += special;
  }
  console.log(userPreference);



  for (var i = 0; i < inputLength; i++){
    var randomNumber = Math.floor(Math.random() * userPreference.length);
    password += userPreference.substring(randomNumber, randomNumber + 1);
  }

  return password;
  
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
