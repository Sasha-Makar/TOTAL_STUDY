//написати програму яка генерує число від 1 до 100 і дозволяє
// користувачу відгадати його надаючи підказки *більше* або
// *менше*.Програма повинна продовжувати запитувати користувача


// let randomNum = Math.floor(Math.random() * 100) +1;
// console.log(randomNum);


let random = Math.floor(Math.random() * 100) + 1;
console.log(random);


// while (true) {
//     let value = +prompt('введіть своє число');
//
//     if (value === random) {
//         alert('Ви вгадали. Загадане число - ' + random);
//         break;
//     } else if (value < random) {
//         alert(value + ' менше загаданого числа');
//     } else {
//         alert(value + ' більше загаданого числа');
//     }
// }

let final = true;
while (final) {
    let value = +prompt('введіть своє число');

    if (value === random) {
        alert('Ви вгадали. Загадане число - ' + random);
        final = false;
    } else if (value < random) {
        alert(value + ' менше загаданого числа');
    } else {
        alert(value + ' більше загаданого числа');
    }
}