// написати програму яка запитує рік народження людини
// і порівнює її з поточним
// роком і визначає чи досягла особа повноліття(18 років)



// let birthYear = Number(prompt("Enter your birth year"));
//
// let currentYear = new Date().getFullYear();
// // console.log(currentYear);
// // alert(currentYear - birthYear);
// let currentAge = currentYear - birthYear;
//
// const adultAge = 18;
//
// if (currentAge >= adultAge){
//     alert('You are of legal age, welcome');
// }else {
//     alert('You are underage, entry is prohibited')
// }


let birthYear = prompt('enter your year of birth');

let currentYear = new Date().getFullYear();
// console.log(currentYear);

let adult = 18;
let result = currentYear - birthYear;

if (result >= adult){
    alert('your age is good? WELCOME');
}else {
    alert('PROHIBITED ENTER');
}