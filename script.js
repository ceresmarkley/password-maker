var generateBtn = document.querySelector("#generate");
var possibleCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()-_+={}[]<>?,.;:'\"/";


function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain? 8-128 characters required!'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (Number(length) < 8) {
    alert('Your password must be at least 8 characters!!')
    return null;
  } else if (Number(length) > 128) {
    alert('Your password has too many characters!!')
    return null;
  }
  
  var hasUppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  var hasNumbers = confirm(
    'Click OK to confirm including numerical characters.'
  );

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );


   // Object to store user input
   var passwordOptions = {
    length: length, 
    hasUppercase: hasUppercase,
    hasNumbers: hasNumbers, 
    hasSpecialCharacters: hasSpecialCharacters,
    // add more properties and values here
   }

   console.log(passwordOptions);
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
  console.log(result)

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericalCharacters)
    guaranteedCharacters.push(getRandom(numericalCharacters));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Loop through the guaranteed characters and add them to the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result.push(guaranteedCharacters[i]);
  }

  // Loop through the possible characters and add them to the result until the desired length is reached
  while (result.length < options.length) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    result.push(possibleCharacters[randomIndex]);
  }
  
  console.log(guaranteedCharacters);


    // Transform the result into a string and pass into writePassword
    return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);