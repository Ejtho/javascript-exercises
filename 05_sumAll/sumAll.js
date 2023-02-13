const sumAll = function(num1, num2) {
    let sum = 0;
    for (i = Number(num1); i <= Number(num2); i++) {
         sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;