/*написати середнє арефметичне 3х чисел та вивести на екран*/

// Number(),parseInt(),parseFloat(),+


// let value1 = Number(prompt('enter first value'));
// let value2 = Number(prompt('enter second value'));
// let value3 = Number(prompt('enter third value'));
//
// let res = value1 + value2 + value3;
// let avg = res / 3;
//
// console.log(avg.toFixed(2));

// let avg = 3.14159;
// console.log(typeof avg);
// console.log(avg.toFixed(2)); // "3.14" (рядок!)

let avg = 3.14159;
let fixed = avg.toFixed(2);       // fixed = "3.14" (це РЯДОК)
console.log(fixed);               // виведе "3.14"
console.log(typeof fixed);       // виведе "string"
console.log(typeof avg.toFixed(2)); // теж "string"