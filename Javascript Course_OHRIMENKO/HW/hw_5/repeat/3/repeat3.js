/*let throwCount = +prompt
('Скфльки разів ви хочете кинути шестигранний кубик?');
//
//
//
//
// for (let i = 0; i < throwCount; i++) {
//     const result = random(1, 6);
//     console.log(result);
// }
*/



let throwCount = +prompt('Скільки разів ви хочете кинути шестигранний кубик?');

let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);


// for (let i = 0; i < throwCount; i++) {
//     const result = random(1, 6);
//     console.log(result);
// }