// написати програму яка обчислює суму всіх чисел
// в діапазоні заданому користувачем

// Задача 3
// Написати програму, яка обчислює суму всіх чисел в діапазоні,
// заданому користувачем
// Кроки для виконання завдання:
// 1.Введення початку та кінця діапазону: Використайте prompt
// для введення початку та кінця діапазону.
// 2. Перетворення введених даних на числа:
// Перетворіть введені значення з рядка на числа, використовуючи
// parselnt або Number.
// 3. Перевірка введених даних: Переконайтеся,що користувач ввів
// коректні числа і що початок діапазону менший або дорівнює кінцю
// діапазону.
// 4. Обчислення суми чисел у діапазоні: Використайте цикл for для
// обчислення суми всіх чисел у заданому діапазоні.
// 5. Виведення результату: Використайте alert для виведення суми.

console.log('==========');
console.log('==========');
console.log('==========');
let startNum, endNum;

// while (true) {
//     startNum = parseInt(prompt('enter start number'));
//     endNum = parseInt(prompt('enter end number'));
//     if ((!isNaN(startNum) && !isNaN(endNum)&& ((startNum >= 0)&& (startNum <=endNum)))) {
//         break;
//     }else {
//         alert('ENTER CORRECT NUMBERS !!!');
//     }
// }
// let sum = 0;
// for (let i = startNum; i <=endNum ; i++) {
//     sum+=i;
// }
// alert('сума чисел від ' + startNum + ' до ' + endNum + ' буде ' + sum);

console.log('==========');
console.log('==========');
console.log('==========');


function getValue(message) {
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== '' && value !== null;
        if (isValid) return Number(value);
    }
}


let start = getValue('enter start nums value');
let end = getValue('enter end nums value');

let sum = 0;
if (start < end) {
    for (let i = start; i <= end; i++) {
        sum += i;
    }
} else {
    alert('enter correct num');
}

alert(sum);








