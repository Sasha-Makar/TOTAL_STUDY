

document.querySelector('#btn').onclick = function () {
    let name = prompt('Enter your name please');
    let output = document.querySelector('#output');
    output.innerHTML = `Hello ${name}`.toUpperCase();
    output.style.color = 'blue';
    output.style.fontSize = '100px';
}