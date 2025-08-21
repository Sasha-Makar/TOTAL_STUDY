/*виконати рефакторинг сценарію для конвертації градусів
* між цельсієм та фарангейтом
* використовувати функції*/
//написати програму яка перетворює температуру з цельсія на фаренгейт
// і навпаки в залежності від вибору користувача
// з Цельсія у Фаренгейт F = 9/5 * t +32
// з Фарангейт у Цульсій C = 5/9* (t-32)
// document.querySelector('#btnToC').onclick = function () {
//     let tempF = Number(document.querySelector('#temp').value);
//     let tempOfC = 5 / 9 * (tempF - 32);
//     showResult(tempOfC);
// }
// document.querySelector('#btnToF').onclick = function () {
//     let tempC = Number(document.querySelector('#temp').value);
//     let tempOfF = 9/5 * tempC + 32;
//     showResult(tempOfF);
// }
// function showResult(result) {
//     let output = document.querySelector('#output');
//     output.innerHTML = result;
// }

let getValue = () => Number(document.querySelector("#temp").value);
let toCelsius = temp => 5 / 9 * (temp - 32);
let toFarenheit = temp => 9 / 5 * temp + 32;

let convert = converter => {
    return () => {
        let temp = getValue();
        let value = converter(temp);
        showResult(value);
    }
}

document.querySelector("#btnToC").onclick = convert(toCelsius);
document.querySelector("#btnToF").onclick = convert(toFarenheit);

function showResult(result) {
    let output = document.querySelector("#output");
    output.innerHTML = result;
}
