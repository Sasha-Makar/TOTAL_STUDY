

document.querySelector('#btn').onclick = function () {
    let currentName = prompt('What is your name ?');
    let output = document.querySelector('#output');
    output.innerHTML = `Привіт ${currentName} )))!!!`;

}