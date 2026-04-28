const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(arr) {
  let total = 0;
  for (let item in arr) {
    total += arr[item];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let item in arr) {
    total *= arr[item];
  }
  return total;
};

const power = function(a,n) {
	result = 1
  for (let i = 0; i < n; i++){
    result *= a
  }
  return result 
};

const factorial = function(n) {
	result = 1
  for (let i = 1; i <= n; i++){
    result *= i
  }
  return result 
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
