/*напишіть сценарій який знайде в массиві
 всі відємні значення та замінить їх на
 значення 0. Після цього виведіть всі
 значення массиву.*/


// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
//
// for ( let i = 0; i < values.length; i++) {
//     let num = values[i];
//     if(num < 0){
//         values[i] = 0;
//     }
// }
// console.log(values);

// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
//
// // Проходимо по кожному елементу масиву
// for (let i = 0; i < values.length; i++) {
//     // Якщо значення від'ємне, заміняємо його на 0
//     if (values[i] < 0) {
//         values[i] = 0;
//     }
// }
//
// // Виводимо оновлений масив
// console.log(values);

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
console.log(values);

for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 0;
    }
}
// console.log(values);

function callback(value,index) {
    console.log(`index ${index} = ${value}`)
}

values.forEach(callback)


values.forEach((value, index) => console.log(`index ${index} = ${value}`));
