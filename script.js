// Assignment Code
var generateBtn = document.querySelector("#generate");
var choices = "";

//constant identifications

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Choose the length of your password (between 8 and 128 characters");

    if ( 
      passwordLength < 8
      ||
      passwordLength > 128
       ) {
        alert ("You MUST pick a length between 8 and 128 characters");
        return;
    }

    var hasUpper = prompt("Do you want this password to have upper case letters? (Y/N)");

      hasUpper = hasUpper.toUpperCase();
        if ( 
            hasUpper !== "Y"
            &&
            hasUpper !== "N"
          ) {
          alert ("You MUST choose Y or N");
        return;
      }

  var hasLower = prompt("Do you want this password to have lower case letters? (Y/N)");

      hasLower = hasLower.toUpperCase();
        if ( 
          hasLower !== "Y"
          &&
          hasLower !== "N"
          ) {
          alert ("You MUST choose Y or N");
        return;
      }

  var hasNumbers = prompt("Do you want this password to have numbers? (Y/N)");

      hasNumbers = hasNumbers.toUpperCase();
        if ( 
          hasNumbers !== "Y" 
          && 
          hasNumbers !== "N" 
          ) { 
          alert ("You MUST choose Y or N");
        return;
      }

  var hasSpecChar = prompt("Do you want this password to have special characters?");

      hasSpecChar = hasSpecChar.toUpperCase();
        if ( 
          hasSpecChar !== "Y" 
          && 
          hasSpecChar !== "N" 
          ) { 
          alert ("You MUST choose Y or N");
        return;
      }
  
        if (hasUpper == "Y") {

        }
  

}
  

//var passwordText = document.querySelector("#password");

  //passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  


//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//TODO: write the generatePassword function
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//TODO: ask the user how many characters they want in the password --> use a prompt which will be set to a var --> make sure the information is correct --> number --> 8+ or 128-
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase,    //numeric, and/or special characters
//TODO: write a series of 4 confirms --> set these to be a var --> to check if the user wants
//TODO: write 4 arrays; one lowercase, one uppercase, one number, and one special
//TODO: check that the prompts true or false --> using above var for this --> add associated arrays to a "holding array" upperConfirm --> true --> uppercase[] --> add to holding[]
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type //should be selected
//TODO: check that we have at least one of the types
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//TODO: take our holding array and randomize the characters --> adding to a second array
//TODO: take the randomized characters and select the amount the user has chosen for the password length --> add these to a "return array" --> for loop the length for this will be the user password length
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//TODO: take our return array and use array methods to convert to a string --> have a var for this and return string