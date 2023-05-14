// Assignment Code
var generateBtn = document.querySelector("#generate");

//---- Let me start by saying this code is totally optional and if you want to go in a completely different direction I support it. Go with your gut and what works for you because it will help you figure out your thought process.Let us know if you have any questions and don't be afraid to start a dialogue with fellow students!  ----------------------- Delete this before you push your code to github LOL

function getPasswordOptions() {

// Variable to store length of password from user input
var length = parseInt(
prompt('How many characters would you like your password to contain?'),
10
);

// Check if password length is a number. Prompts end if this evaluates false
if (isNaN(length)) {
alert('Password length must be provided as a number');
return null;
}

// Variable to store boolean regarding the inclusion of special characters
var hasSpecialCharacters = confirm(
'Click OK to confirm including special characters.'
);

// Object to store user input
var passwordOptions = {
length: length,
hasSpecialCharacters: hasSpecialCharacters
};

return passwordOptions;
}

// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
var randIndex = Math.floor(Math.random() * arr.length);
var randElement = arr[randIndex];

return randElement;
}

// Function to generate password with user input
function generatePassword() {

var options = getPasswordOptions();
// Variable to store password as it's being concatenated
var result = [];

// Array to store types of characters to include in password
var possibleCharacters = [
'abcdefghijklmnopqrstuvwxyz',
'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
'0123456789',
'!@#$%^&*()-_=+[]{}<>,./?;:'
];

// Array to contain one of each type of chosen character to ensure each will be used
var guaranteedCharacters = [];

// Check if an options object exists, if not exit the function
if (!options) return null;

// Conditional statement that adds array of special characters into array of possible characters based on user input
// Push new random special character to guaranteedCharacters
if (options.hasSpecialCharacters) {
possibleCharacters = possibleCharacters.concat(specialCharacters);
guaranteedCharacters.push(getRandom(specialCharacters));
}

// Generate password
for (var i = 0; i < options.length; i++) {
var character = getRandom(possibleCharacters);
result.push(character);
}

// Return password
return result.join('');
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

alert(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
