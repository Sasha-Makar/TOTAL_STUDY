let btn = document.getElementById('btn');
let p = document.querySelector('p');
console.log(p);
console.log(btn);

btn.onclick = function () {
    p.innerText = 'Hi!!!';
    p.style.color = 'red';
}
