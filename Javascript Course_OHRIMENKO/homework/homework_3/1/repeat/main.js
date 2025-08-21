// Завдання 1
// Написати програму, яка визначає, чи є введене число парним або непарним.
//
//Кроки для виконання завдання:
//
//- Введення числа: Використайте prompt для введення числа користувачем.
//
// - Перетворення введених даних на число: Перетворіть введене значення з
// рядка на число, використовуючи parseInt або Number.
//
// - Перевірка введених даних: Переконайтеся, що користувач ввів коректне число.
//
// - Перевірка на парність: Використайте оператор залишку від ділення (%), щоб
// визначити, чи є число парним або непарним.
//
// - Виведення результату: Використайте alert для виведення повідомлення про те,
// чи є число парним або непарним.


document.querySelector('#btnCheck').onclick = function () {
    let showResult = document.querySelector('#output');
    let mainNum = Number(document.querySelector('#num').value);
    // console.log(mainNum);
    // console.log(typeof mainNum);
    if (isNaN(mainNum)||mainNum === undefined || mainNum === null) {
        alert('Enter the correct value');
    }else if (mainNum%2 === 0) {
        showResult.innerHTML = `${mainNum} це парне число`;
        showResult.style.color = 'red';
    }else {
        showResult.innerHTML = `${mainNum} це непарне число`;
        showResult.style.color = 'blue';
    }

}

document.querySelector('#reset').onclick = function () {
    let showResult = document.querySelector('#output');
    showResult.innerHTML = '';
}




