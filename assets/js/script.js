// Assignment code here
function generatePassword() {
    var password = "";
    var chars = "";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    // window prompt for user input
    // that only accepts integers
    var userChoice = parseInt(
        window.prompt(
            "Choose a length of at least 8 characters but no more than 128 characters"
        )
    );

    // if prompt is blank
    // or
    // 8 > userChoice > 128
    // end prompt and return no password
    if (!userChoice || userChoice < 8 || userChoice > 128) {
        window.alert("Please choose a length between 8 and 128 (inclusive).");
        return password;
    } else {
        // ask user to include lowercase chars
        if (window.confirm("Inlcude lowercase characters?")) {
            // concats lowercase string to var chars
            chars = chars.concat(lowercaseChars);
        }
        // ask user to include uppercase chars
        if (window.confirm("Inlcude uppercase characters?")) {
            // concats uppercase string to var chars
            chars = chars.concat(uppercaseChars);
        }
        // ask user to include numeric chars
        if (window.confirm("Inlcude numeric characters?")) {
            // concats numeric string to var chars
            chars = chars.concat(numericChars);
        }
        // ask user to include special chars
        if (window.confirm("Inlcude special characters?")) {
            // concats special string to var chars
            chars = chars.concat(specialChars);
        }
        // var chars now includes all characters
        // user wants password to include

        // if none of the above are selected
        // alert to click generate password again
        if (chars == "") {
            window.alert(
                "At least one character type should be selected. Please try again."
            );
        }
        // for loop to randomly generate password
        // based on character choices above
        passwordLength = userChoice;
        for (let i = 0; i < passwordLength; i++) {
            // gets a random index within var chars
            var randomIndex = Math.floor(Math.random() * chars.length);
            // adds the char string from the random index to password string
            // using substring(indexStart, indexEnd) method - does not include indexEnd
            // allows to get one character
            password += chars.substring(randomIndex, randomIndex + 1);
        }
    }
    return password;
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
