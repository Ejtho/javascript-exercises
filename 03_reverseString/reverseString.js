const reverseString = function(string) {
    let stringArray = string.split("");
    const reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Or this solution, without using the reverse method
// function reverseString(array) {
//    let stringArray = string.split("");
//     while (stringArray.length) {
//       output.push(StringArray.pop());
//     }
//   
//     return output;
//   }
  


// Do not edit below this line
module.exports = reverseString;
