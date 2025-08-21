/*написати програму яка обчислює площу та периметр кола.
* потрібно запитати в юзера дані для обчислення площі
* та периметра
* фнкція повинна приймати радіус кола
* формули -площа pi * r**2 // периметр - 2*pi*r
* запит в юзера радіусу
* алерт для виведеня результату*/


// function getCitcleArea(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
let getCircleArea = radius =>  Math.PI * Math.pow(radius, 2);//by arrow function

function getCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

let radius = getValue('Enter radius');
let area = getCircleArea(radius);
let perimeter = getCirclePerimeter(radius);

console.log(area);
console.log(perimeter);

