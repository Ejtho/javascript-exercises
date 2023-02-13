const palindromes = function (string) {
    // g to replace whitespace globally, then to lower case
    let stripped = string.replace(/[^\w\']|_/g, "").toLowerCase();
    let stringArray = Array.from(stripped);
    if (stringArray.join("") == stringArray.reverse().join("")) {
        return `${string} is a palindrome!`;
    } else {
        return `${string} is not a palindrome!`;
    }
};

// Do not edit below this line
module.exports = palindromes;
