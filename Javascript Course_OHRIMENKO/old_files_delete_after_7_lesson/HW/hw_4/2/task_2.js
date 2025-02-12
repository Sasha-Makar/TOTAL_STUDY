//Math quiz
// debugger

// let symbolArr = ['+', '-', '/', '*'];
// let len = symbolArr.length;
//
// let randomNum1 = Math.floor(Math.random() * 10) +1;
// let randomNum2 = Math.floor(Math.random() * 10) +1;
// console.log(randomNum1, randomNum2);
//
// let mathExpressionGeneration = Math.floor(Math.random() * len);
// let symbol = symbolArr[mathExpressionGeneration];
// console.log(symbol);
//
//
// // let userResult = +prompt('enter your result');
// // console.log(userResult);
//
// function playGame(randomNum1, randomNum2,symbol){
//     let mathRes;
//     if (symbol === '+'){
//         mathRes = randomNum1 + randomNum2;
//     }else if(symbol === '-'){
//         mathRes = randomNum1 - randomNum2;
//     }else if (symbol === '*') {
//         mathRes = randomNum1 * randomNum2;
//     }else {
//         mathRes = randomNum1 / randomNum2;
//     }
//     console.log(mathRes);
//     return mathRes;
// }
//
// playGame(randomNum1, randomNum2, mathExpressionGeneration);


// Масив із символами операцій
let symbolArr = ['+', '-', '*', '/'];
let attempts = 5; // Кількість спроб
let correctAnswers = 0; // Лічильник правильних відповідей
let wrongAnswers = 0; // Лічильник неправильних відповідей

alert("Ласкаво просимо до гри 'Математичний квіз'! У вас є 5 спроб.");

// Основний цикл гри
for (let i = 0; i < attempts; i++) {
    // Генерація випадкових чисел та операції
    let randomNum1 = Math.floor(Math.random() * 10) + 1; // Випадкове число 1-10
    let randomNum2 = Math.floor(Math.random() * 10) + 1; // Випадкове число 1-10
    let randomOperatorIndex = Math.floor(Math.random() * symbolArr.length); // Випадковий індекс
    let selectedOperator = symbolArr[randomOperatorIndex]; // Вибір операції

    // Розрахунок правильного результату
    let correctResult;
    switch (selectedOperator) {
        case '+':
            correctResult = randomNum1 + randomNum2;
            break;
        case '-':
            correctResult = randomNum1 - randomNum2;
            break;
        case '*':
            correctResult = randomNum1 * randomNum2;
            break;
        case '/':
            correctResult = (randomNum1 / randomNum2).toFixed(2); // Округлення до 2 знаків
            break;
    }

    // Запит у користувача
    let userAnswer = +prompt(`Спроба ${i + 1} з ${attempts}: Обчисліть ${randomNum1} ${selectedOperator} ${randomNum2}`);

    // Перевірка відповіді
    if (userAnswer === parseFloat(correctResult)) {
        alert("Правильно!");
        correctAnswers++;
    } else {
        alert(`Неправильно! Правильна відповідь: ${correctResult}`);
        wrongAnswers++;
    }
}

// Підсумкові результати
alert(`Гру завершено! 
Правильні відповіді: ${correctAnswers}
Неправильні відповіді: ${wrongAnswers}`);

