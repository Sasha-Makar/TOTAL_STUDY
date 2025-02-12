

function defined() {

    document.querySelector('#btnDate').onclick = function () {
        let currentDate = new Date().toLocaleDateString();
        let date = document.querySelector('#outDate');
        date.innerHTML = currentDate;
    }

    document.querySelector('#btnDay').onclick = function () {
        let currentDay = new Date().getDay();
        let day = document.querySelector('#outDay');
        // console.log(currentDay);
        switch (currentDay) {
            case 0 :
                alert( 'Неділя' );
                day.innerHTML = 'Сьогодні Неділя';
                break;
            case 1:
                alert( 'Понеділок' );
                day.innerHTML = 'Сьогодні ПОНЕДІЛОК';
                break;
            case 2:
                alert( 'Вівторок' );
                day.innerHTML = 'Сьогодні ВІВТОРОК';
                break;
            case 3:
                alert( 'Середа' );
                day.innerHTML = 'Сьогодні СЕРЕДА';
                break;
            case 4:
                alert( 'Четверг' );
                day.innerHTML = 'Сьогодні ЧЕТВЕРГ';
                break;
            case 5:
                alert( 'Пятниця' );
                day.innerHTML = 'Сьогодні ПЯТНИЦЯ';
                break;
            case 6:
                alert( 'Субота' );
                day.innerHTML = 'Сьогодні СУБОТА';
                break;
            default:
                alert( 'ПОМИЛКА!!!' );
        }
    }
}


defined();