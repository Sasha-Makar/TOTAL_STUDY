// let listGoods = [];
// let value = prompt('Enter name of good')
//
// let addGoods = (value) => listGoods.push(value);
// let deleteGoods=(value)=> listGoods.pop(value);
//
//
// let showList = () => console.log(listGoods);
//
// let userSelection= ()=>{
//
// }



// Початковий список покупок
let shoppingList = ["молоко", "хліб", "яйця"];

// Функція для додавання товару до списку
function addItem(item) {
    shoppingList.push(item);
    console.log(`${item} додано до списку.`);
}

// Функція для видалення товару зі списку
function removeItem(item) {
    const index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(`${item} видалено зі списку.`);
    } else {
        console.log(`Товар ${item} не знайдено в списку.`);
    }
}

// Функція для виведення поточного списку покупок
function displayList() {
    if (shoppingList.length > 0) {
        console.log("Ваш список покупок:");
        shoppingList.forEach(item => console.log(`- ${item}`));
    } else {
        console.log("Список покупок порожній.");
    }
}

// Головна функція для взаємодії з користувачем
function shoppingProgram() {
    let isRunning = true;

    while (isRunning) {
        let choice = prompt("Оберіть дію:\n1. Додати товар\n2. Видалити товар\n3. Показати список покупок\n4. Вийти");

        switch (choice) {
            case "1":
                let itemToAdd = prompt("Введіть назву товару для додавання:");
                addItem(itemToAdd);
                break;
            case "2":
                let itemToRemove = prompt("Введіть назву товару для видалення:");
                removeItem(itemToRemove);
                break;
            case "3":
                displayList();
                break;
            case "4":
                console.log("До побачення!");
                isRunning = false;
                break;
            default:
                console.log("Невірний вибір, спробуйте ще раз.");
        }
    }
}

// Запуск програми
shoppingProgram();
