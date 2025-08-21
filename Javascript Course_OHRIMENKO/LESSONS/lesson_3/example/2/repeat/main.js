// написати програму яка запитує рік народження людини
// і порівнює її з поточним
// роком і визначає чи досягла особа повноліття(18 років)


let birthYear = +prompt('enter your birth year');
let currentYear = new Date().getFullYear();
console.log(currentYear);

let currentAge = currentYear - birthYear;
console.log(currentAge);


const adultAge = 18;

if (currentAge >= adultAge) {
    alert('welcome');
}else {
    alert('stop');
}