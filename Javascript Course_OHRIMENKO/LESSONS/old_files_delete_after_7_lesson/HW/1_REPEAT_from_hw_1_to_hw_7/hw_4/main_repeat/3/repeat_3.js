//
//
//
// function getValue(message) {
//     while (true) {
//         let initValue = prompt(message);
//         let valid = !isNaN(initValue) && initValue !== '' && initValue !== null;
//         if (!valid) {
//             alert('your integer is not valid, please try again');
//         } else {
//             return Number(initValue);
//         }
//     }
// }
//
// let start = getValue('enter start integer');
// let end = getValue('enter end integer');
//
//
// if (start > end){
//     alert('start int is wrong');
//     start = getValue('Enter start integer');
// }else {
//     let sum = 0;
//     for (let i = start; i <= end ; i++) {
//         sum +=i;
//     }
//     alert(`сума чисел в діапазоні від ${start} до ${end} буде - ${sum} `);
// }

function getValue(message) {
    while (true) {
        let input = prompt(message);
        let number = Number(input);

        if (!isNaN(number) && input !== '' && input !== null) {
            return number;
        } else {
            alert('Некоректне число, спробуйте ще раз.');
        }
    }
}

// Отримуємо початок і кінець діапазону
let start = getValue('Введіть початкове число:');
let end = getValue('Введіть кінцеве число:');

// Міняємо місцями, якщо start > end
if (start > end) {
    [start, end] = [end, start]; // Деструктуризація для обміну значень
}

// Обчислення суми чисел у діапазоні
let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}

// Виведення результату
alert(`Сума чисел у діапазоні від ${start} до ${end} дорівнює ${sum}.`);


