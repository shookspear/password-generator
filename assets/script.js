

// Generate the Password
var generatePassword = function() {

  // Determine Password Length
    var fnPasswordLength = function(){
      var passwordLength = window.prompt('Choose a Password LENGTH between 8 and 128 characters.');


      //Verify a number is selected
      if (isNaN(passwordLength)) {
        window.alert("You need to provide a valid number! Please try again.");
        return fnPasswordLength();
      }

      // Verify that number is an integer
      if ((passwordLength - Math.floor(passwordLength)) !== 0) {
        window.alert("You need to provide a whole number without decimals! Please try again.");
        return fnPasswordLength();
      }
      
      // Verify number between 8 and 128 is selected
      if (passwordLength < 8 || passwordLength > 128) {
        window.alert("You need to provide a length between 8 and 128 characters! Please try again.");
        return fnPasswordLength();
      } 
    }

  // Call the Password Length function
  fnPasswordLength();



  
  // Allow Lowercase characters?
 // var passwordLower = window.prompt('Allow LOWERCASE characters? Choose 1 for YES and 2 for NO');

  // Allow Uppercase characters?
//  var passwordUpper = window.prompt('Allow UPPERCASE characters? Choose 1 for YES and 2 for NO');

  // Allow Numeric characters?
 // var passwordNumeric = window.prompt('Allow NUMERIC characters? Choose 1 for YES and 2 for NO');

  // Allow Special Characters?
 // var passwordSpecial = window.prompt('Allow SPECIAL characters? Choose 1 for YES and 2 for NO');

  var test="mama";
  return test;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
