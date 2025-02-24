

document.querySelector('#btn').onclick = function () {
    let currentDay = new Date().getDay();
    // console.log(currentDay);
    let dayName;
    switch (currentDay) {
        case 0 :
            dayName = 'НЕДІЛЯ';
            break;
        case 1 :
            dayName = 'ПОНЕДІЛОК';
            break;
        case 2:
            dayName = 'ВІВТОРОК';
            break;
        case 3:
            dayName = 'СЕРЕДА';
            break;
        case 4:
            dayName = 'ЧЕТВЕРГ';
            break;
        case 5:
            dayName = 'ПЯТНИЦЯ';
            break;
        case 6:
            dayName = 'СУБОТА';
            break;
        default:
            alert('ERROR!!!');
    }
    showDay(dayName);
}

function showDay(day) {
    let output = document.querySelector('#output');
    output.innerHTML = `Сьогодні ${day}`;
    output.style.color = 'red';
    output.style.fontSize = '28px';


}