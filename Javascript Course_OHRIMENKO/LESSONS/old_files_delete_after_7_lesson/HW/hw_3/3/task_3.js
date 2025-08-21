//Отримуємо рік від дати за допомогою
// метода Date. getFullYear() і
// перевіряємо: якщо рік кратний 4 і
// не кратний 100 або рік кратний 400
// тоді - рік високосний.


function getYear() {
    document.querySelector('#btnYear').onclick = function () {
        let year = prompt('ENTER ANY YEAR');
        let output = document.querySelector('#output');

        if ((year % 4 === 0) && (!(year % 100 === 0) || year % 400 === 0)) {
            alert('РІК ВИСОКОСНИЙ')
            output.innerHTML = `${year} - ВИСОКОСНИЙ РІК`;
        }else {
            alert('рік не високосний')
            output.innerHTML = `${year} - НЕ ВИСОКОСНИЙ РІК`;
        }
    }
}


getYear();