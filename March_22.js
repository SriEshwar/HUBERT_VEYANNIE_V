function firstFunction() {
  console.log("1")
}

function secondFunction() {
  console.log("2")
}
secondFunction();
firstFunction();
//<-------------------------Callback--------->
// Example main code
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(operation, num1, num2) {
  var result = operation(num1, num2);
  console.log(result);
}
calculator(add, 1, 2);
calculator(subtract, 1, 2);
calculator(multiply, 1, 2);
calculator(divide, 1, 2);
