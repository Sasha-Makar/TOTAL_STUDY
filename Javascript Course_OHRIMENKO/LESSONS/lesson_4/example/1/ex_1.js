//написати програму яка генерує числотвід 1 до 100 і дозволяє
// користувачу відгадати його надаючи підказки *більше* або
// *менше*.Програма повинна продовжувати запитувати користувача


// let randomNumber = Math.floor(Math.random() * 100) + 1;
// // console.log(randomNumber);
//
//
// while (true) {
//     let integer = Number(prompt('введіть своє число'));
//
//     if (integer === randomNumber) {
//         alert('ви вгадали загадане число');
//         break;
//     } else if (integer > randomNumber) {
//         alert('загадане число менше ніж ' + integer);
//     } else {
//         alert('загадане число більше ніж ' + integer);
//     }
// }


// let gameIsOver = 1;
// while (gameIsOver) {
//     let integer = Number(prompt('введіть своє число'));
//
//     if (integer === randomNumber) {
//         alert('ви вгадали загадане число');
//         gameIsOver = 0;
//     } else if (integer > randomNumber) {
//         alert('загадане число менше ніж ' + integer);
//     } else {
//         alert('загадане число більше ніж ' + integer);
//     }
// }


//1

// let random = Math.floor(Math.random() * 100) +1;
//
// while (true) {
//     let userNum = +prompt('введіть своє число');
//
//     if (userNum === random) {
//         alert('ВИ ВГАДАЛИ');
//         break;
//     } else if (userNum < random) {
//         alert('загадане число більше ніж ' + userNum);
//     } else {
//         alert('загадане число меньше ніж ' + userNum);
//     }
// }


//2

// let random = Math.floor(Math.random() * 100) + 1;
//
// let gameIsOver = true;
// while (gameIsOver) {
//     let userNum = +prompt('vvedit svoe chyslo');
//
//     if (userNum === random) {
//         alert('you win !!!');
//         gameIsOver = false;
//     } else if (userNum > random) {
//         alert('zagadane chyslo menshe ' + userNum);
//     } else {
//         alert('zagadane chyslo bilshe ' + userNum);
//     }
// }