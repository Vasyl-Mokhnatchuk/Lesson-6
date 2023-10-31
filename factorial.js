function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const prompt = require("prompt-sync")();
let input = prompt("Введіть число для обчислення: ");

if (!isNaN(input)) {
  let num = parseInt(input);
  let result = factorial(num);
  console.log(`Факторіал числа ${num} =`, result);
} else {
  console.log("Невірний ввід. Введіть число.");
}