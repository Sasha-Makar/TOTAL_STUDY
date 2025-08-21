//Написати програму,яка аналізує список оцінок студентів і знаходить середній бал,найвищу та найнижчу оцінки.
//Кроки для виконання завдання:
//1.Створити масив для зберігання оцінок студентів:
//-Оцінки можуть бути представлені як цілі числа від 0 до 100.
//2.Створити функцію для обчислення середнього балу:
//-Функція повинна приймати масив оцінок як аргумент і повертати середнє значення.
//3.Створити функцію для знаходження найвищої оцінки:
//-Функція повинна приймати масив оцінок як аргумент і повертати найвищу оцінку.
//4.Створити функцію для знаходження найнижчої оцінки:
//-Функція повинна приймати масив оцінок як аргумент і повертати найнижчу оцінку.
//5.Запросити користувача ввести кілька оцінок і зберегти їх у масив:
//-Використайте `prompt` для запиту оцінок, можна також згенерувати їх автоматично.
//6.Обчислити середній бал, найвищу і найнижчу оцінки:
//-Викликати відповідні функції для обчислень.
//7.Вивести результати:
//-Використайте `alert` для виведення середнього балу, найвищої та найнижчої оцінок.


// let studentMarks = [];
//
// let attempt = 0;
// while (attempt < 10) {
//     let marks = parseInt(prompt('enter marks (from 0 to 100)'));
//     // if (marks === null || marks === '') {
//     //     alert('enter correct mark');
//     //     break;
//     // }
//     if (isNaN(marks) || marks < 0 || marks > 100) {
//         alert('enter correct mark(mark must between 0 & 100)');
//         continue;
//     }
//     studentMarks.push(marks);
//     attempt++;
//     if (studentMarks.length >= 10) break;
// }
//
// console.log(studentMarks);
//
//
//
// function calcAvrg(arr) {
//     let sum = 0;
//     let res;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     res = sum/arr.length;
//     return res;
// }
//
// let avrg = calcAvrg(studentMarks);
//
// let max = (arr) => Math.max(...arr);
// let min = (arr)=> Math.min(...arr);
//
// let maxMarks = max(studentMarks);
// let minMarks = min(studentMarks);
//
// // alert('student average mark ' + avrg + '\n' + ' min mark is ' + minMarks + '\n' + 'max mark is ' + maxMarks);
// alert(`Student average mark: ${avrg}\nMin mark: ${minMarks}\nMax mark: ${maxMarks}`);



/**
 * Збирає оцінки студентів (0–100) через prompt, дозволяючи до 10 спроб.
 * Повертає масив із коректними оцінками.
 // * @returns {number[]} Масив оцінок
 */
function collectStudentMarks() {
    const marks = [];
    let attempts = 0;
    const maxAttempts = 10;
    const maxMarks = 10;

    while (attempts < maxAttempts && marks.length < maxMarks) {
        // Запитуємо оцінку, показуючи кількість спроб, що залишилися
        const input = prompt(`Enter a mark (0–100, ${maxAttempts - attempts} attempts left):`);

        // Обробка скасування або порожнього введення
        if (input === null || input.trim() === '') {
            alert('Input cancelled or empty. Stopping.');
            break;
        }

        // Конвертуємо введення в число
        const mark = parseInt(input, 10);

        // Перевіряємо, чи введено коректне число в діапазоні 0–100
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert('Please enter a valid integer between 0 and 100');
            continue;
        }

        marks.push(mark);
        attempts++;
    }

    return marks;
}

/**
 * Обчислює середнє значення елементів масиву.
 // * @param {number[]} arr - Масив чисел
 // * @returns {number} Середнє значення, округлене до 2 знаків після коми
 */
function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    // Перевіряємо, чи всі елементи є числами
    if (!arr.every(item => typeof item === 'number' && !isNaN(item))) {
        return NaN;
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return Number((sum / arr.length).toFixed(2));
}

/**
 * Знаходить максимальне значення в масиві.
 * @param {number[]} arr - Масив чисел
 * @returns {number|null} Максимальне значення або null для порожнього масиву
 */
function getMaxMark(arr) {
    return arr.length === 0 ? null : Math.max(...arr);
}

/**
 * Знаходить мінімальне значення в масиві.
 * @param {number[]} arr - Масив чисел
 * @returns {number|null} Мінімальне значення або null для порожнього масиву
 */
function getMinMark(arr) {
    return arr.length === 0 ? null : Math.min(...arr);
}

/**
 * Форматує результати (середнє, максимум, мінімум) для виведення.
 * @param {number[]} marks - Масив оцінок
 */
function displayResults(marks) {
    const average = calculateAverage(marks);
    const maxMark = getMaxMark(marks);
    const minMark = getMinMark(marks);

    if (marks.length === 0) {
        alert('No marks were entered.');
        return;
    }

    // Виводимо результати в зрозумілому форматі
    alert(`Student results:\nAverage mark: ${average}\nMinimum mark: ${minMark}\nMaximum mark: ${maxMark}`);
}

// Основна логіка: збираємо оцінки та виводимо результати
const studentMarks = collectStudentMarks();
console.log('Student marks:', studentMarks);
displayResults(studentMarks);