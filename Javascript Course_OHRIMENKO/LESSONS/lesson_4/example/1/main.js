//написати програму яка генерує число від 1 до 100 і дозволяє
// користувачу відгадати його надаючи підказки *більше* або
// *менше*.Програма повинна продовжувати запитувати користувача


// let randomNum = Math.floor(Math.random() * 100) +1;
// console.log(randomNum);
//
// function guessTheNumber(num) {
//     let gameOver = false;
//     while (!gameOver) {
//         let userNum = +prompt('enter your number');
//         if (userNum > num) {
//             alert(userNum + ' більше ніж загадане число. Продовжуйте!');
//         } else if (userNum < num) {
//             alert(userNum + ' меньше ніж загадане число. Продовжуйте!');
//         } else {
//             alert('Ви вгадали. ПЕРЕМОГА!!!');
//             gameOver = false;
//             break;
//         }
//     }
// }
//
// guessTheNumber(randomNum);


let randomNum = Math.floor(Math.random() * 100) +1;
console.log(randomNum);

function guessTheNumber(num) {

    while (true) {
        let userNum = +prompt('enter your number');
        if (userNum > num) {
            alert(userNum + ' більше ніж загадане число. Продовжуйте!');
        } else if (userNum < num) {
            alert(userNum + ' меньше ніж загадане число. Продовжуйте!');
        } else {
            alert('Ви вгадали. ПЕРЕМОГА!!!');

            break;
        }
    }
}

guessTheNumber(randomNum);