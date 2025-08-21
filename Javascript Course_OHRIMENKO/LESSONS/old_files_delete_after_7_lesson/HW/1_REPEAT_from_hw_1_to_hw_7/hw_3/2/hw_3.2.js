let day = 3;
document.querySelector('#btnD').onclick = function () {
    let dayOfWeek = new Date().getDay();
    // console.log(dayOfWeek);
    let output = document.querySelector('#output');
    switch (day) {
        case 0:
            output.innerHTML = `сьогодні день тижня-НЕДІЛЯ`;
            break;
        case 1:
            output.innerHTML = `сьогодні день тижня-ПОНЕДІЛОК`;
            break;
        case 2:
            output.innerHTML = `сьогодні день тижня-ВІВТОРОК`;
            break;
        case 3:
            output.innerHTML = `сьогодні день тижня-СЕРЕДА`;
            break;
        case 4:
            output.innerHTML = `сьогодні день тижня-ЧЕТВЕРГ`;
            break;
        case 5:
            output.innerHTML = `сьогодні день тижня-П'ЯТНИЦЯ`;
            break;
        case 6:
            output.innerHTML = `сьогодні день тижня-СУБОТА`;
            break;
        default:
            output.innerHTML = `такого дня тижня не існує)))`;
            break;
    }

}
