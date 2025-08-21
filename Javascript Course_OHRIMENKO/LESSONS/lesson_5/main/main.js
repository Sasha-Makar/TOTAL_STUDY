// console.log(22);
//
// function Greeting(msg, count) {
//     while (count>0) {
//         console.log('Hello');
//         console.log(`My name is ${msg}`);
//         count--;
//     }
// }
// Greeting('sasha',3);


// function Greeting(msg = 'Aleks') {
//     console.log('Hello');
//     console.log('my name is ' + msg);
// }
//
// Greeting();
// Greeting('Sasha');

// function add(x, y) {
//     if (true) {
//         let sum = x + y;
//         return sum;
//     }else {
//         console.log('123');
//         return -1;
//     }
// }
//
// let test = add(10,);
// console.log(test);

function add(x, y) {
    if (y !== undefined) {
        let sum = x + y;
        return sum;
    } else {
        console.log('123');
        return -1;
    }
}

let test = add(10); // не передали y
console.log(test);  // виведе 123 і -1

let arr = [10, 20, 30];
let index = arr.indexOf(50);  // елементу 50 немає

console.log(index);// -1


let add2 = (x,y)=>x+y;
let add1 = add2(10, 20);
console.log(add1);


