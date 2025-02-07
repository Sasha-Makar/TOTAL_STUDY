/*3_написати програму яка обчислює суму
всіх чиселв діапазоні заданому
користувачем*/


function getValue(message) {
    let isValid;

    while (true) {
        let value = prompt(message);
        if (!isNaN(value) && value !== null && value !== '') {
            isValid = true;
            return Number(value);
        } else {
            alert('задане значенн не є числом');
            isValid = false;
        }
    }
}


let start = getValue('введіть число початкового діапазону');
let end = getValue('введіть число кінцевого діапазону');

if (end < start) {
    alert('кінцеве значення не може бути меньшим за початкове');
    window.location.reload();
} else {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert(`сума чисел в діапазоні від ${start} до ${end} є ${sum}`);
}