//написати програму яка генерує числотвід 1 до 100 і дозволяє
// користувачу відгадати його надаючи підказки *більше* або
// *менше*.Програма повинна продовжувати запитувати користувача

/*розширити програму- коли юзер вгадає число-програма повинна
 вивести на екран вмі числа які були введені*/



let randomNum = Math.floor(Math.random() * 100) +1;
console.log(randomNum);

let attemps = [];

function guessTheNumber(num) {

    while (true) {
        let userNum = +prompt('enter your number');
        attemps.push(userNum);
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

console.log('you have doing ' + attemps.length + ' attemps');
attemps.forEach(item => console.log(item));