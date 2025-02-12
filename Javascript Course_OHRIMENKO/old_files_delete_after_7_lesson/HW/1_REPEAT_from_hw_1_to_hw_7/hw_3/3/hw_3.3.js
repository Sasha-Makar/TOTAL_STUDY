function leapYear() {
    let year = prompt('enter year');
    if (isNaN(year) || year === '' || year === null) {
        alert('enter valid value');
        leapYear();
        return;
    }

    year = Number(year);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert('рік є високосним');
    } else {
        alert('рік не є високосним!!!')
    }
}

leapYear();

// function leapYear() {
//     let year = prompt('Enter year');
//
//     // Перевірка на коректність введення (рік має бути числом)
//     if (isNaN(year) || year === '' || year === null) {
//         alert('Будь ласка, введіть правильний рік!');
//         leapYear();  // Викликаємо функцію знову, якщо введено неправильне значення
//         return; // Завершаємо поточну функцію, щоб не продовжувати виконання далі
//     }
//
//     year = Number(year); // Перетворюємо введене значення в число
//
//     // Перевірка на високосний рік
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         alert(`${year} є високосним роком.`);
//     } else {
//         alert(`${year} не є високосним роком.`);
//     }
// }
//
// leapYear();


