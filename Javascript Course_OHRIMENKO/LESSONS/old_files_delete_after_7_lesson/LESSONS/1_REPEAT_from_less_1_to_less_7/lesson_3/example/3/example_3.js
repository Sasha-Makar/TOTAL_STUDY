// Написати програму, яка перетворює температуру з Цельсія у Фаренгейт
// і навпаки, за користувача.
// Кроки для виконання завдання:
// 1.Вибір користувача:- Використайте prompt для введення вибору користувачем:
// перетворити з Цельсія у Фаренгейт або з Фаренгейта у Цельсій.
// 2.Введення температури:- Використайте prompt для введення температури, яку
// потрібно перетворити.
// 3.Перетворення температури та вивід результату - Використайте умовні оператори
// для визначення вибору користувача і застосування відповідної формули
// для перетворення температури:- 3 Цельсія у Фаренгейт: F = 9/5 * t + 32
//
//                              - 3 Фаренгейта у Цельсій: С = 5/9 * (t - 32)


console.log('==============-----------------===================');


// let tempValue = +document.querySelector('#temp').value;
// let output = document.querySelector('#output');
//
// document.querySelector('#toC').onclick = function () {
//     let tempC = 5 / 9 * (tempValue - 32);
//     output.innerHTML = tempC;
//     output.style.color = 'red';
// }
//
// document.querySelector('#toFr').onclick = function () {
//     let tempF = 9 / 5 * tempValue + 32;
//     output.innerHTML = tempF;
//     output.style.color = 'blue';
// }



document.querySelector("#toC").onclick = function () {
    let tempF = Number(document.querySelector("#temp").value);
    let tempC = 5 / 9 * (tempF - 32);
    showResult(tempC);
}
document.querySelector("#toFr").onclick = function () {
    let tempC = Number(document.querySelector("#temp").value);
    let tempF = 9 / 5 * tempC + 32;
    showResult(tempF);
}

function showResult(result) {
    let output = document.querySelector("#output");
    output.innerHTML = result;
}