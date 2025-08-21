console.log('first line');
let sum = 100;

// if (sum > 1000)
//     console.log('отримайте знижку');
//     console.log('second line');

// if (sum > 1000) {
//     console.log('отримайте знижку');
//     console.log('second line');
// }

if (sum > 1000) {
    console.log('отримайте знижку');
    console.log('second line');
} else {
    console.log('немає знижки');
}

console.log('======-------======');


let dayNum = 2;

switch (dayNum) {
    case 1 :
        console.log('Monday');
        break;
    case 2:
        console.log('Wednesday');
        break;
    default:
        console.log('ERROR');
}
console.log('==========');

let dayOfWeek = {

    'monday': function () {
        console.log('monday');
    },
    'tuesday': function () {
        console.log('tuesday');
    },
    'wednesday': function () {
        console.log('wednesday');
    }
}
// let day = prompt('enter day: monday, tuesday or wednesday');

// dayOfWeek[day]();
console.log('=========---------============');


// тернарний оператор

let a = 110;

let msg = (a === 10) ? 'a=10' : 'a!=10';
console.log(msg);


let suma = 100;
if (suma > 1000) {
    console.log('отримайте знижку');
} else {
    console.log('немає знижки');
}
console.log('===');

let result = (suma > 1000) ? 'отримайте знижку' : 'немає знижки';
console.log(result);


console.log('=========-----------============');
console.log('--------------ЦИКЛИ-------------');





// while (true){
//     console.log('test');
//     break;
// }

let counter = 1;
while (counter <= 10){
    console.log('test №-' + counter);
    counter++;
}

console.log('========');

// do {
//     console.log('test');
// } while (false);
// counter = 0;
// do {
//     console.log('test №-' + counter);
//     counter++;
// } while (counter < 5)
counter = 100;
do {
    console.log('test №-' + counter);
    counter++;
} while (counter < 5)


console.log('=========');


for(let i = 0; i < 5; i++){
    console.log('test № - ' + i);
}


console.log('===');

// eternal cycle---вічний цикл
// while (true){

//
// }
//
// for (;;) {
//
// }







