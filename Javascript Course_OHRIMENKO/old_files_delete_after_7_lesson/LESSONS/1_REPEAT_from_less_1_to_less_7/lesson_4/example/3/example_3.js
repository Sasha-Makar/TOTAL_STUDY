// написати програму яка обчислює суму всіх чисел
// в діапазоні заданому користувачем


function getValue(message) {
    while (true) {
        let value = +prompt(message);
        let isValid = !isNaN(value) && value !== '' && value !== null;
        // if (isValid) break;
        if (isValid) return Number(value);
    }
}


let start = getValue('введіть початок діапазону');
let end = getValue('введіть кінець діапазону');


if (start > end) {
    alert('кінець діапащону не може бути меньшим за початок')
} else {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert(`сума чисел в діапазоні від ${start} до ${end} буде : ${sum}`);
}

