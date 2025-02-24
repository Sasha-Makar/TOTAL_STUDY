// написати програму яка запитує рік народження людини
// і порівнює її з поточним
// роком і визначає чи досягла особа повноліття(18 років)


// let currenDate = new Date().getFullYear();
// console.log(currenDate);
//
// let bDay = Number(prompt('enter your year of birth'));
//
// function adult(currentDate, bDay) {
//     let finalRes = currentDate - bDay;
//     let adult = 18;
//     if (finalRes < adult) {
//         alert('see CARTOON');
//     }else {
//         alert('WELCOME');
//     }
// }
//
// adult(currenDate, bDay);

let currentYear = new Date().getFullYear();
let birthYear = +prompt('enter your year of birth');
let currentAge = currentYear-birthYear;

const adultAge=18;

if (currentAge >= 18) {
    alert('WELCOME');
}else {
    alert('see CARTOON');
}