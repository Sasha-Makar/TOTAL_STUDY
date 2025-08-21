// 1.
/*написати програму яка обчислює
 площу та периметр кола.
* потрібно запитати в юзера дані
для обчислення площі
* та периметра
* фнкція повинна приймати радіус кола
* формули -площа pi * r**2 //
периметр - 2*pi*r
* запит в юзера радіусу
* алерт для виведеня результату*/


// function getCircleArea(radius) {
// return Math.PI * Math.pow(radius, 2);
// }


// let radius = +prompt('enter radius');
//
// let areaCircle = radius => Math.floor(Math.PI * Math.pow(radius, 2));
// let areaPerimeter = radius => Math.floor(2 * Math.PI * radius);
//
// alert('area-' + areaCircle(radius) + '\n' + 'perimeter-' + areaPerimeter(radius));

// '===================================='//
// '===================================='//
// '===================================='//
// '===================================='//
// '===================================='//


// 2.
/*виконати рефакторинг сценарію для
конвертації градусів
* між цельсієм та фарангейтом
* використовувати функції*/
//написати програму яка перетворює
// температуру з цельсія на фаренгейт
// і навпаки в залежності від вибору
// користувача
// з Цельсія у Фаренгейт F = 9/5 * t +32
// з Фарангейт у Цульсій C = 5/9* (t-32)


// document.querySelector('#btnToC').onclick = function () {
//     // let tempF = Number(document.querySelector('#temp').value);
//
//     // let tempOfC = 5 / 9 * (tempF - 32);
//
//     showResult(tempOfC);
//
// }

// document.querySelector('#btnToF').onclick = function () {

    // let tempC = Number(document.querySelector('#temp').value);

    // let tempOfF = 9/5 * tempC + 32;

    // showResult(tempOfF);
// }

// function showResult(result) {
//
//     let output = document.querySelector('#output');
//     output.innerHTML = result;
// }


// let getValue = () => Number(document.querySelector('#temp').value);
//
// let toCelcius = temp => 5 / 9 * (temp - 32);
// let toFarenheit = temp => 9 / 5 * temp + 32;
//
// let convert = converter => {
//     return()=> {
//         let temp = getValue();
//         let value = converter(temp);
//         showResult(value);
//     }
// }
// document.querySelector('#btnToF').onclick = convert(toFarenheit);
// document.querySelector('#btnToC').onclick = convert(toCelcius);
//
// function showResult(result) {
//
//     let output = document.querySelector('#output');
//     output.innerHTML = result;
// }




// '============================';
// '============================';
// '============================';
// '============================';





// 3.
let throwCount = +prompt('Скфльки разів ви хочете кинути шестигранний кубик?');


let random =(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < throwCount; i++) {
    const result = random(1, 6);
    console.log(result);
}