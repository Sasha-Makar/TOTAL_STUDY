/*напиши сценарій який знайде мінімальне,
максимальне значення в масивіа також
виведе суму всіх елементів масиву*/


// function min(arr) {
//     let min = Number.MIN_VALUE;
//     for (const value of arr) {
//         if (value < min) {
//             min = value;
//         }
//     }
//     return min;
// }
function min(arr) {
  return Math.min(...arr)
}

function max(arr) {
  return Math.max(...arr);
}

function sum(arr) {
  let sum = 0;
  for (let value of arr) {
    sum +=value;
  }
  return sum;
}
let test = [1,2,3];
let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, -15, 3, -0.5, -33, 123, ...test];
console.log(values);

const minNum = min(values);
console.log(minNum);
console.log(max(values));
console.log(sum(values));
