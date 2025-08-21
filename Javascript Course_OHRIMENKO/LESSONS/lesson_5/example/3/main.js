let throwCount = +prompt('Скфльки разів ви хочете кинути шестигранний кубик?');


let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let d6 = () => random(1, 6);
let d12 = () => random(1, 12);


for (let i = 0; i < throwCount; i++) {
    const result = d6();
    console.log(result);
}

console.log('=========');

for (let i = 0; i < throwCount; i++) {
    const result = d12();
    console.log(result);
}
