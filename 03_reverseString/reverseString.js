const reverseString = function(string) {
    let stringArray = string.split("");
    const reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;
};

// Or this solution, without using the reverse method
// function reverse(array) {
//    var output = [];
//     while (array.length) {
//       output.push(array.pop());
//     }
//   
//     return output;
//   }
  


// Do not edit below this line
module.exports = reverseString;
