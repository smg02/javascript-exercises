const add = function(a,b) {
  return a + b
};

const subtract = function() {
  return a - b
};

const sum = function ([...values]) {
  let total = 0;
  const addFunction = function (num) {
      return total += num;
  }

  values.forEach(addFunction)
  return total
};

const multiply = function([...values]) {
  let result=1;
  const mul = function(number) {
      return result *= number;
  }

  values.forEach(mul)
  return result
};

const power = function(number, power) {
	return number ** power
};

const factorial = function(number) {
  let product=1;
  for (i = 1; i <= number; i++) product *= i;
  return product
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
