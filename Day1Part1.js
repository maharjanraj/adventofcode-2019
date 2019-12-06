const input = require("./Day1Input");

const result = input.split("\n").reduce((total, a) => {
  return Math.floor(a / 3) - 2 + total;
}, 0);

console.log(result);

// Ans: 3330521
