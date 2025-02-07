// let output = document.querySelector('#output');
//
//
// let btn = document.querySelector('#btn');
//
// btn.onclick = function () {
//     output.innerHTML = 'HELLO WORLD';
// }


document.querySelector('#btn').onclick = function () {
    let output = document.querySelector('#output');
    output.innerHTML = 'HELO WORLD';
    output.style.color = 'blue';
}