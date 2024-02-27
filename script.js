// Assignment code here
function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '{', '}'];
  var otherCharacters = [];

  // length prompt
  var characterNumber = Number(prompt("How many characters should your password be? Must select value between 8-128 characters."));
  if (characterNumber < 8 || characterNumber > 128) {
    return "Please choose values within range.";
  } else {
    alert("Your password will be " + characterNumber + " characters long.");
  }

  // character prompt
  var selectLowercase = confirm("Do you want lowercase characters? Yes-OK No-Cancel");
  if (selectLowercase) {
    alert("Your password will include lowercase characters.");
  } else {
    alert("Your password will not include lowercase characters.");
  }

  var selectUppercase = confirm("Do you want uppercase characters? Yes-OK No-Cancel");
  if (selectUppercase) {
    alert("Your password will include uppercase characters.");
  } else {
    alert("Your password will not include uppercase characters.");
  }

  var selectNumerical = confirm("Do you want numerical characters? Yes-OK No-Cancel");
  if (selectNumerical) {
    alert("Your password will include numerical characters.");
  } else {
    alert("Your password will not include numerical characters.");
  }

  var selectSpecial = confirm("Do you want special characters? Yes-OK No-Cancel");
  if (selectSpecial) {
    alert("Your password will include special characters.");
  } else {
    alert("Your password will not include special characters.");
  }

  // combine
  if (selectLowercase) {
    otherCharacters = otherCharacters.concat(lowercaseCharacters);
  }
  if (selectUppercase) {
    otherCharacters = otherCharacters.concat(uppercaseCharacters);
  }
  if (selectNumerical) {
    otherCharacters = otherCharacters.concat(numericCharacters);
  }
  if (selectSpecial) {
    otherCharacters = otherCharacters.concat(specialCharacters);
  }

  // generation
  let createdPassword = "";
  for (let i = 0; i < characterNumber; i++) {
    let rng = Math.floor(Math.random() * otherCharacters.length);
    createdPassword = createdPassword + otherCharacters[rng];
  }
  return createdPassword;
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
