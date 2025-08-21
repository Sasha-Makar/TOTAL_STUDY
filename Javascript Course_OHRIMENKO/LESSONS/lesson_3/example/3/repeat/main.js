//написати програму яка перетворює температуру з цельсія на фаренгейт
// і навпаки в залежності від вибору користувача
// з Цельсія у Фаренгейт F = 9/5 * t +32
// з Фарангейт у Цульсій C = 5/9* (t-32)


document.querySelector('#btnToC').onclick = function () {
    let tempFg = document.querySelector('#temp').value;
    let tempInC = 5 / 9 * (tempFg - 32);
    showResult(tempInC);
}

document.querySelector('#btnToFg').onclick = function () {
    let tempC = document.querySelector('#temp').value;
    let tempInFg = 9 / 5 * tempC + 32;
    showResult(tempInFg);
}

function showResult(result) {
    let output = document.querySelector('#output');
    output.innerHTML = result;
}


