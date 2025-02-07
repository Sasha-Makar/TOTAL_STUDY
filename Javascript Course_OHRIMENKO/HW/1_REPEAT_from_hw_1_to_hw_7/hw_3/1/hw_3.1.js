

// document.querySelector('#btn').onclick = function () {
//     let number = Number(document.querySelector('#num').value);
//     if (typeof number === 'number'){
//         let result;
//         if (number%2 ===0){
//             result=number;
//             document.querySelector('#output').innerHTML = `${number} є парним числом`;
//         }else {
//             document.querySelector('#output').innerHTML = `${number} є НЕпарним числом`;
//         }
//     } else {
//         alert('Введіть правильне значення!!!')
//     }
// }

document.querySelector('#btn').onclick = function () {
    let number = Number(document.querySelector('#num').value);
    if (!isNaN(number) && number !== '') {  // Перевіряємо, чи це число і не порожній рядок
        let result;
        if (number % 2 === 0) {
            result = number;
            document.querySelector('#output').innerHTML = `${number} є парним числом`;
        } else {
            document.querySelector('#output').innerHTML = `${number} є НЕпарним числом`;
        }
    } else {
        alert('Введіть правильне значення!!!');
    }
}
