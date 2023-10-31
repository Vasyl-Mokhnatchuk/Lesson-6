function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const prompt = require("prompt-sync")();
let input = prompt("Введіть число для обчислення: ");

if (!isNaN(input)) {
  let num = parseInt(input);
  let result = fibonacci(num);
  console.log(`Число Фібоначчі з індексом ${num} =`, result);
} else {
  console.log("Невірний ввід. Введіть число.");
}