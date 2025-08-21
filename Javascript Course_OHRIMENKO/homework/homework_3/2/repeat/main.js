// Написати програму, яка визначає, який сьогодні день тижня, і
// виводить відповідне повідомлення.
//
//Кроки для виконання завдання:
//
//Отримання поточної дати:- Використайте об'єкт Date для
// отримання поточної дати.
//
//Визначення дня тижня:- Використайте метод getDay()
// об'єкта Date для отримання дня тижня (0 для неділі,
// 1 для понеділка і т.д.).
//
//Виведення результату:- Використайте оператор if для
//визначення дня тижня і виведення відповідного повідомлення.


// document.getElementById('btn').addEventListener('click', function () {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const today = new Date();
//     const dayName = days[today.getDay()];
//     document.getElementById('output').textContent = "Today is " + dayName;
// });


// let date= new Date();
// console.log(date);
// let day = date.getDay();
// console.log(day);
//
// console.log(days[day]);




// switch () {
//     case 0 :
//        alert('неділя') ;
// }


document.querySelector('#btn').addEventListener('click',function () {
    let date = new Date();
    let day = date.getDay();
    let dayName = '';

    switch (day) {

        case 0 :
            dayName = 'Sunday';
            break;
        case 1 :
            dayName = 'Monday';
            break;
        case 2 :
            dayName = 'Tuesday';
            break;
        case 3 :
            dayName = 'Wednesday';
            break;
        case 4 :
            dayName = 'Thursday';
            break;
        case 5 :
            dayName = 'Friday';
            break;
        case 6 :
            dayName = 'Saturday';
            break;
        default:
            alert('something go wrong!!!');
    }

    document.querySelector('#output').textContent = 'today is ' + dayName;
    document.querySelector('#output').style.color = 'blue';
})