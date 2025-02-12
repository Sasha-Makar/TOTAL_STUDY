/*написати середнє арефметичне 3х чисел та вивести на екран*/


// let name = prompt('Введіть своє імя');
//
// console.log('Hello ' + name);

let value1 = parseInt(prompt('enter first number'));
let value2 = +prompt('enter second number');
let value3 = parseFloat(prompt('enter third number'));
//Number parseInt parseFloat +
// console.log(value1 + value2 + value3);
let sum = value1 + value2 + value3;
let average = sum / 3;
console.log(average.toFixed(2));
console.log(parseFloat(average));
console.log(parseInt(average));