// 3.Створіть кнопку на сторінці з текстом
// "Скажи привіт", зробіть щоб при кліку по
// кнопці виводилося повідомлення "Привіт
// {name}" де замість {name} буде виводитися
// ваше ім'я.
let name = "Aleks";
document.querySelector('#btn').onclick = function () {
    let p = document.querySelector('#output');
    p.innerHTML = `Hello ${name}`;
    p.style.color = 'red';
    p.style.fontSize = '25px';
};
