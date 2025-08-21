// 2.Створіть сторінку яка виводить на екран
// поточну дату. Ви можете обрати для виводу
// на екран console.log або alert або
// використати приклад взаємодії з контентом
// сторінки з задачі №5 яка розглядалася на
// уроці. Наступний JS код виводить поточну
// дату new Date()
// Вставте це значення замість повідомлення,
//     яке виводили в задачах на уроці



let btn = document.querySelector('#btn');
console.log(btn);

// let date = new Date().toLocaleString();
let date = new Date().toLocaleDateString();
console.log(date);

btn.onclick = function () {
    let output = document.querySelector('#output');
    output.innerHTML = date;
    output.style.color = 'red';
    output.style.fontSize = '30px';
}



