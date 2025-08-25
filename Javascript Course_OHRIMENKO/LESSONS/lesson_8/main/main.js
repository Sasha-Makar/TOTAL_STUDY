// // let e = document.getElementById('element');
//
// // console.log(e);
// // e.innerText = 'model';
// // e.innerHTML = '<b>hello</b>'
// // e.textContent = '<b>hello</b>'
//
// // e.className = 'test';
// // e.classList.add('test');
// // e.classList.remove('test');
// // let b = e.classList.contains('test');
// // console.log(b);
// // e.style.color = 'blue';
//
//
// let e = document.querySelector('#element');
// console.log(e);
//
// e.classList.remove('test');


/////////////////////////////////////////////////////////


let element = document.querySelector('#list');
console.log(element);


let li = document.createElement('li');
li.innerText = 'item 2';

element.appendChild(li);


element.insertAdjacentHTML("beforeend", '<li>item 3</li>');