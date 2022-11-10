// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", ".", "&", "*", "?", "-", "=", "+"];
var characterLength = 8;

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    if (correctPrompts) {
        var newPassword = generatePassword();

        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
    console.log(newPassword)
}

function generatePassword() {
    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts() {
    choiceArr = [];

    characterLength = parseInt(prompt("How many characters would you like in the password? Between 8-128."));

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character length must be a number from 8-128 digits. Please try again!")
        return false;
    }
    
    if (confirm("Would you like your password to include lowercase letters?")) {
        choiceArr = choiceArr.concat(letters)
    }

    if (confirm("Would you like your password to include UPPERCASE letters?")) {
        choiceArr = choiceArr.concat(upperCase)
    }

    if (confirm("Would you like your password to include #numbers?")) {
        choiceArr = choiceArr.concat(numbers)
    }

    if (confirm("Would you like your password to include <Special Characters>?")) {
        choiceArr = choiceArr.concat(specialCharacters)
    }
    return true;
}


