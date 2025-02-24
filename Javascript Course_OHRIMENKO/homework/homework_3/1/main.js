document.querySelector('#btn').onclick = function () {
    let output = document.querySelector('#output');
    let number = Number(document.querySelector('#num').value);
    if (isNaN(number)||number === undefined || number === null){
        alert('Введіть правильно число!!!');
    }else if (number%2 === 0){
        output.innerHTML = `Результат : ${number} є парним числом`
    }else {
        output.innerHTML = `Результат : ${number} є НЕпарним числом`
    }

}
