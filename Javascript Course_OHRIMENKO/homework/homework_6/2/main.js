//Написати програму,яка працює зі списком покупок:додає нові товари,видаляє наявні та виводить список товарів на екран.
//Кроки для виконання завдання:
//1.Створити масив для зберігання списку покупок:-Початково масив може бути порожнім або містити кілька базових товарів.
//2.Створити функцію для додавання товару до списку:-Функція приймає назву товару як аргумент і додає його до масиву.
//3.Створити функцію для видалення товару зі списку:-Функція приймає назву товару як аргумент,знаходить його у масиві
// та видаляє.
//4.Створити функцію для виведення поточного списку покупок:-Функція виводить всі елементи масиву у зручному для
// читання форматі.
//5.Запропонувати користувачу вибрати дію:-Використати `prompt` для вибору дії:додавання товару,видалення товару
// або виведення списку.
//6.Реалізувати вибір користувача:-Викликати відповідні функції на основі вибраної дії.
//7.Повторити процес, поки користувач не завершить роботу:-Дати можливість користувачу виконувати дії у циклі.
//
let shopList = ['молоко', 'хліб', 'сир'];

function addToList(arr, item) {
    arr.push(item);

}

function removeFromList(arr, item) {
    let index = arr.indexOf(item);

    if (index !== -1) {
        arr.splice(index, 1);

    } else {
        console.log('такого товару не має в списку');
    }
}

// function showList(arr) {
//     console.log('список ваших товарів:');
//     arr.forEach(item => console.log(`- ${item}`));
// }
function showList(arr) {
    let message = 'Список ваших товарів:\n';
    arr.forEach(item => message += `- ${item}\n`);
    alert(message);
}


function workProgram() {
    let isWork = true;
    let item = prompt(`Введіть свій вибір \n'1'-Доадти товар\n'2'-Видалити товар\n'3'-Показати список\n'4'-Вийти`);

    switch (item) {
        case '1': {
            let value = prompt('enter your item-product');
            addToList(shopList, value);
            break;
        }
        case '2': {
            let value = prompt('enter your item=product to remove from list');
            removeFromList(shopList, value);
            break;
        }
        case '3':
            showList(shopList);
            break;
        case '4':
            isWork = false;
            break;
        default:
            console.log('something go wrong');


    }
}


workProgram();

// let shopList = ['молоко', 'хліб', 'сир'];
//
// function addToList(arr, item) {
//     if (item && item.trim()) {
//         arr.push(item.trim());
//         alert(`Товар "${item.trim()}" додано до списку`);
//     } else {
//         alert('Будь ласка, введіть назву товару');
//     }
// }
//
// function removeFromList(arr, item) {
//     if (item && item.trim()) {
//         let index = arr.findIndex(element => element.toLowerCase() === item.trim().toLowerCase());
//         if (index !== -1) {
//             let removedItem = arr.splice(index, 1)[0];
//             alert(`Товар "${removedItem}" видалено зі списку`);
//         } else {
//             alert('Такого товару немає в списку');
//         }
//     } else {
//         alert('Будь ласка, введіть назву товару');
//     }
// }
//
// function showList(arr) {
//     if (arr.length === 0) {
//         alert('Список покупок порожній');
//         return;
//     }
//     let message = 'Список ваших товарів:\n';
//     arr.forEach(item => message += `- ${item}\n`);
//     alert(message);
// }
//
// function workProgram() {
//     let isWork = true;
//     while (isWork) {
//         let choice = prompt(`Виберіть дію:\n'1' - Додати товар\n'2' - Видалити товар\n'3' - Показати список\n'4' - Вийти`);
//
//         if (choice === null) {
//             alert('Операцію скасовано');
//             continue;
//         }
//
//         switch (choice) {
//             case '1': {
//                 let item = prompt('Введіть назву товару:');
//                 addToList(shopList, item);
//                 break;
//             }
//             case '2': {
//                 let item = prompt('Введіть назву товару для видалення:');
//                 removeFromList(shopList, item);
//                 break;
//             }
//             case '3':
//                 showList(shopList);
//                 break;
//             case '4':
//                 isWork = false;
//                 alert('Програму завершено');
//                 break;
//             default:
//                 alert('Невірний вибір, спробуйте ще раз');
//         }
//     }
// }
//
// workProgram();