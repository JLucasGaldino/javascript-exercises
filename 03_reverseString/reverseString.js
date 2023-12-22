const reverseString = function(string) {
    const stringArray = string.split("");
    const reversedArray = stringArray.reverse();
    let reversedString = "";
    for (let character of reversedArray) {
        reversedString += character;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
