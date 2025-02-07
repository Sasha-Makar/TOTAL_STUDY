// 1_написати програму яка генерує число від
// 1 до 100 і дозволяє користувачу відгадати
// його надаючи підказки *більше* або *менше*.
// Програма повинна продовжувати запитувати
// користувача


let compNumber = Math.floor(Math.random() *100) +1;
console.log(compNumber)


while (true) {
    let userNumber = +prompt('enter you number');
    if (userNumber === compNumber) {
        alert('Ви вгадали загадане число');
        break;
    } else if (userNumber > compNumber) {
        alert('загадане число меньше ' + userNumber);
    } else {
        alert('загадане число більше ' + userNumber);
    }
}



let randomNum = Math.floor(Math.random()*100)+1;
console.log(randomNumber);





while (true){
    userNum = prompt('enter your num');
    if (!isNaN(userNum) && userNum !=='' && userNum !== null){

    }
}
