/*написати середнє арефметичне 3х чисел та вивести на екран*/


// let count = 3;
// let numArr = [];
// let res = 0;
//
// for (let i = 0; i < count; i++) {
//     numArr[numArr.length] = parseInt(prompt('enter integer'));
//     res += numArr[i];
// }
// console.log(numArr);
// let finalRes = res/numArr.length;
// console.log(+(finalRes.toFixed(2)));


let num1 = Number(prompt('enter number#1'));
let num2 = Number(prompt('enter number#2'));
let num3 = Number(prompt('enter number#3'));

let sumOfNums = num1 + num2 + num3;
console.log(sumOfNums);

let avg = sumOfNums / 3;
alert(avg);


