// написати програму яка обчислює суму всіх чисел
// в діапазоні заданому користувачем


//
//     function initValue(message) {
//
//         while (true) {
//             let value = prompt(message);
//             let validValue = !isNaN(value) && value !== null && value !== '';
//             if (validValue) return Number(value);
//         }
//     }
//
// let start = initValue('введіть початоквий діапазон');
// let end = initValue('введіть кінцевий діапазон');
//
// if (end < start){
//     alert('кінець діапазону не може бути меншим за початок ');
// }else {
//     let sum = 0;
//     for (let i = start; i <= end; i++){
//         sum = sum + i;
//     }
//     alert(`Сума чисел в діапазоні від ${start} до ${end} дорівнює ${sum} `);
// }




// function getValue(message) {
//
//     while (true) {
//         let value = prompt(message);
//         let isValid = !isNaN(value) && value !== null && value !== '';
//         if (isValid) return Number(value);
//     }
//
// }
//
//
// let start = getValue('Введіть початок діапазону');
// let end = getValue('Введіть кінець діапазону');
//
//
// if (end < start){
//     alert('початок діапазону не може бути більшим за кінець !!!')
// }else {
//     let sum = 0;
//
//     for (let i = start; i <= end; i++) {
//
//         sum += i;
//     }
//     alert(`сума чисел в діапазоні від ${start} до ${end} дорівнює ${sum} `)
// }





let start = getValue('enter START range');
let end = getValue('enter END range');


function getValue(message) {

    while (true) {
        let initValue = prompt(message);
        let isValid = !isNaN(initValue) && initValue !== '' && initValue !== null;
        if (isValid){
            return Number(initValue);
        }else {
            alert('wrong value');
        }
    }
}


if (start > end) {
    alert('початок не може бути більше від кінця діапазону');
    alert('START AGAIN');
    location.reload();
}else {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    alert('сума чисел в діапазоні від ' + start + 'до ' + end + ' є ' + result);
}

