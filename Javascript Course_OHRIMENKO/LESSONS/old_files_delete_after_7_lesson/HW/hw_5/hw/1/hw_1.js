/*Індекс маси тіла розраховується шляхом
 ділення маси тіла (у кілограмах) на
 квадрат росту (у метрах квадратних).

Наприклад, визначимо індекс маси тіла
 для людини, яка важить 65 кг при зрості 170 см:

ІМТ = 65 / 1,7×1,7 = 22,5*/

let mass = +prompt('enter your body mass in "kg"!');
let height = +prompt('enter your height in "cm"! ');
let meterHeight = height/100;
// console.log(meterHeight);

let calculateMIT = (mass, meterHeight) => mass / Math.pow(meterHeight, 2);

let MIT = calculateMIT(mass, meterHeight).toFixed(1);
console.log(MIT);



let categoryDefinition = MIT => {
    let result;
    if (MIT < 18.5) {
        result = 'Недостатня вага';
    }else if ((18.5 <= MIT) && (MIT < 24.9)) {
        result = 'Нормальна вага';
    }else if ((25 <= MIT) && (MIT < 29.9)) {
        result = 'Надмірна вага';
    }else if (MIT >= 30){
        result = 'Ожиріння';
    }
    return result;
}
let resultMIT = categoryDefinition(MIT);
console.log(resultMIT);
alert(resultMIT);