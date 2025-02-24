//написати програму яка перетворює температуру з цельсія на фаренгейт
// і навпаки в залежності від вибору користувача
// з Цельсія у Фаренгейт F = 9/5 * t +32
// з Фарангейт у Цульсій C = 5/9* (t-32)


document.querySelector('#toF').onclick = function () {
    let celciusTemp = Number(document.querySelector('#temp').value);
    let farenheit = 9 / 5 * celciusTemp + 32;
    showResult(farenheit);
}

document.querySelector('#toC').onclick = function () {
    let farTemp = Number(document.querySelector('#temp').value);
    let celcius = 5 / 9 * (farTemp - 32);
    showResult(celcius);
}

function showResult(temp) {
    let output = document.querySelector('#output');
    output.innerHTML = `температура у : ${temp}`;
    output.style.color = 'red';
}









