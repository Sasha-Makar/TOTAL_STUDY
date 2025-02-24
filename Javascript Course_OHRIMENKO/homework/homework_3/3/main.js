// кожен рік, який ділиться на чотири, є високосним,
// за винятком років, які діляться на 100, але не
// діляться на 400. Наприклад, 1700, 1800 і 1900
// роки невисокосні, а 1600 і 2000 — високосні.


document.querySelector('#btn').onclick = function () {
    let enteredYear = document.querySelector('#year').value;

    if ((enteredYear % 4 === 0 && enteredYear % 100 !== 0)|| enteredYear %400 ===0) {
        showResult(enteredYear,'є високосним');
    }else {
        showResult(enteredYear,'НЕ є високосним')
    }
}

function showResult(year,txt) {
    let output = document.querySelector('#output');
    output.innerHTML = 'Рік ' + year + ' ' + txt;
}