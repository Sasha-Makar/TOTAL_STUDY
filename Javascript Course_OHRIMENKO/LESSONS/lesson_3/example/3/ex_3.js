//написати програму яка перетворює температуру з цельсія на фаренгейт
// і навпаки в залежності від вибору користувача
// з Цельсія у Фаренгейт F = 9/5 * t +32
// з Фарангейт у Цульсій C = 5/9* (t-32)


// document.querySelector('#btnToC').onclick = function () {
//
//     let tempF = Number(document.querySelector('#temp').value);
//
//     let tempOfC = 5 / 9 * (tempF - 32);
//
//     showResult(tempOfC);
//
// }
//
// document.querySelector('#btnToF').onclick = function () {
//
//     let tempC = Number(document.querySelector('#temp').value);
//
//     let tempOfF = 9/5 * tempC + 32;
//
//     showResult(tempOfF);
// }
//
//
// function showResult(result) {
//
//     let output = document.querySelector('#output');
//     output.innerHTML = result;
// }



document.querySelector('#toC').onclick = function () {
    let tempValue = document.querySelector('#temp').value;
    let convertToC = 5 / 9 * (tempValue - 32);

    showResult(convertToC);

}

document.querySelector('#toF').onclick = function () {
    let tempValue = document.querySelector('#temp').value;
    let convertToF = 9/5 * tempValue + 32;

    showResult(convertToF);

}

function showResult(result) {
    let output = document.querySelector('#output');
    output.innerHTML = result;
}