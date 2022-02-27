

// Generate the Password
var generatePassword = function() {








  // Call the Password Length function
  fnPasswordLength();

    // Call the Password Lowercase function
    fnPasswordLower();





  // Allow Uppercase characters?
//  var passwordUpper = window.prompt('Allow UPPERCASE characters? Choose 1 for YES and 2 for NO');

  // Allow Numeric characters?
 // var passwordNumeric = window.prompt('Allow NUMERIC characters? Choose 1 for YES and 2 for NO');

  // Allow Special Characters?
 // var passwordSpecial = window.prompt('Allow SPECIAL characters? Choose 1 for YES and 2 for NO');

  var test="mama";
  return test;
}



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

    return passwordLength;
  }


// Allow Lowercase characters?
var fnPasswordLower = function() {

  var passwordLower = window.prompt('Allow LOWERCASE characters? Choose 1 for YES and 2 for NO');
  
  // Convert to integer
  passwordLower = parseInt(passwordLower);
  switch (passwordLower) {
    case 1:
      return 1;

    case 2:
      return 0;

    default:
      window.alert("You did not pick a valid option. Try again.");
      fnPasswordLower();
  }
}


// Allow Uppercase characters?
var fnPasswordUpper = function() {

  var passwordUpper = window.prompt('Allow UPPERCASE characters? Choose 1 for YES and 2 for NO');
  
  // Convert to integer
  passwordUpper = parseInt(passwordUpper);
  switch (passwordUpper) {
    case 1:
      return 1;

    case 2:
      return 0;

    default:
      window.alert("You did not pick a valid option. Try again.");
      fnPasswordUpper();
  }
}


// Allow Numeric characters?
var fnPasswordNumeric = function() {

  var passwordNumeric = window.prompt('Allow NUMERIC characters? Choose 1 for YES and 2 for NO');
  
  // Convert to integer
  passwordNumeric = parseInt(passwordNumeric);
  switch (passwordNumeric) {
    case 1:
      return 1;

    case 2:
      return 0;

    default:
      window.alert("You did not pick a valid option. Try again.");
      fnPasswordNumeric();
  }
}


// Allow Special characters?
var fnPasswordSpecial = function() {

  var passwordSpecial = window.prompt('Allow SPECIAL characters? Choose 1 for YES and 2 for NO');
  
  // Convert to integer
  passwordSpecial = parseInt(passwordSpecial);
  switch (passwordSpecial) {
    case 1:
      return 1;

    case 2:
      return 0;

    default:
      window.alert("You did not pick a valid option. Try again.");
      fnPasswordSpecial();
  }
}



// Password Preference Parameters (1-True, 0-False)
var passwordType = {
  length: fnPasswordLength(),
  lowercase: fnPasswordLower(),
  uppercase: fnPasswordUpper(),
  numeric: fnPasswordNumeric(),
  special: fnPasswordSpecial(),
};


//console.log(passwordType);

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
