
let values = ['камінь', 'ножиці', 'папір'];
let compChoice = values[Math.floor(Math.random() * 3)];
console.log(compChoice);

let userChoice = prompt('введіть один з варіантів - камінь, ножиці, папір').toLowerCase();
console.log(userChoice);



if(userChoice === compChoice){
    alert('НІЧИЯ');
}else if ((userChoice === 'камінь' && compChoice === 'ножиці') ||
          (userChoice === 'ножиці' && compChoice === 'папір')  ||
          (userChoice === 'папір' && compChoice === 'камінь')){

    alert('Ви виграли !!! ви - ' + userChoice + ' / комп - ' + compChoice);
} else {
    alert('Ви ПРОГРАЛИ, раунд за комп`ютером - його вибір це ' + compChoice);
}























