


document.querySelector('#btn').onclick = function () {
    let currentDate = new Date().toLocaleDateString();
    let output = document.querySelector('#output');
    output.innerHTML = currentDate;
}