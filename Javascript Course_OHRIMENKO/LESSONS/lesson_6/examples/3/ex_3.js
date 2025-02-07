
//написати програму яка генерує числотвід 1 до 100 і дозволяє
// користувачу відгадати його надаючи підказки *більше* або
// *менше*.Програма повинна продовжувати запитувати користувача

/*розширити програму- коли юзер вгадає число-програма повинна
 вивести на екран вмі числа які були введені*/



let random = Math.floor(Math.random() * 100) +1;
let attempts = [];
// let index = 0;

while (true) {
    let userNum = +prompt('введіть своє число');
    // attempts[index++] = userNum;
    // index++;

    attempts.push(userNum);
    if (userNum === random) {
        alert('ВИ ВГАДАЛИ');
        break;
    } else if (userNum < random) {
        alert('загадане число більше ніж ' + userNum);
    } else {
        alert('загадане число меньше ніж ' + userNum);
    }
}
console.log(`ви зробили ${attempts.length} споб`);
attempts.forEach(x => console.log(x));