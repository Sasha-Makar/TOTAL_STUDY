// 3.Створіть кнопку на сторінці з текстом
// "Скажи привіт", зробіть щоб при кліку по
// кнопці виводилося повідомлення "Привіт
// {name}" де замість {name} буде виводитися
// ваше ім'я.


let btn = document.querySelector('#btn');

btn.onclick = function () {
    let name = prompt('enter your' + '\n' + 'name');
    let output = document.querySelector('#output').innerHTML = `Hello ${name}`;

}