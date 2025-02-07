/*Створіть HTML сторінку з кнопкою.
Зробіть обробник click подій на цю кнопку.
Зробіть щоб при кліку на кнопку на
сторінці зявлялося повідомлення.*/


// let button = document.querySelector('button');
//
// button.onclick = function () {
//     let btn = document.querySelector('#btn');
//     btn.innerHTML = 'Lorem ipsum asdffwefa ef,prkp.....';
// }

// document.querySelector('#output').onclick = function () {
//     alert('hello');
//     alert('world');
//     alert('.....');
// }

document.querySelector('#output').onclick = function () {
    let p = document.querySelector('#btn');
    p.innerHTML = 'Hello, my name is Aleks...';
    p.style.color = 'red';
}

