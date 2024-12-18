function myFunction(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Operands must be numbers";
  }
  return Number(a) - Number(b);
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3
console.log(myFunction('5', 2)); // Output: 3
console.log(myFunction('abc', 2)); //Output: Invalid input: Operands must be numbers