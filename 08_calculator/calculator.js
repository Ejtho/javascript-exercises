const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for (i = 0; i < array.length; i++) {
    sum += array[i];  
  }
  return sum;
};

const multiply = function(array) {
  let product = array[0];
  for (i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(num1, num2) {
  let number = num1;
	for (i = 1; i < num2; i++) {
    number *= num1;
  }
  return number;
};

const factorial = function(num) {
	let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
