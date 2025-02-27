// let userChoice = prompt('enter only - камінь, ножиці, папір');
// console.log(userChoice);
// console.log('-----------');
//
// let element = ['камінь', 'ножиці', 'папір'];
//
// let randomCompChoice = Math.floor(Math.random() * element.length) + 1;
// console.log(randomCompChoice);
//
// let compChoice;
// switch (randomCompChoice) {
//     case 1 :
//         compChoice = 'камінь';
//         console.log(randomCompChoice , compChoice);
//         break;
//     case 2:
//         compChoice = 'ножиці';
//         console.log(randomCompChoice , compChoice);
//         break;
//     case 3:
//         compChoice = 'папір';
//         console.log(randomCompChoice , compChoice);
//         break;
//     default:
//         alert('something go wrong!!!');
// }
//
// console.log(compChoice);
//
// console.log('==========');
//
// if ((userChoice === 'камінь' && compChoice === 'ножиці') ||
//     (userChoice === 'ножиці' && compChoice === 'папір') ||
//     (userChoice === 'папір' && compChoice === 'камінь')) {
//     console.log(userChoice + ' бє ' + compChoice + ' Ви виграли!!!');
// }else if (userChoice === compChoice) {
//     console.log('НІЧИЯ');
// }else {
//     console.log('Ви програли');
// }





// let userScore = 0;
// let computerScore = 0;
//
// function playRound() {
//     // Запитуємо вибір користувача
//     let userChoice = prompt("Виберіть: камінь, ножиці, папір або введіть 'вихід' для завершення гри");
//
//     // Перевірка, чи користувач хоче вийти
//     if (userChoice.toLowerCase() === "вихід") {
//         alert("Дякуємо за гру!");
//         return false;
//     }
//
//     // Перевірка на коректність введеного вибору
//     if (userChoice !== "камінь" && userChoice !== "ножиці" && userChoice !== "папір") {
//         alert("Невірний вибір! Виберіть 'камінь', 'ножиці' або 'папір'.");
//         return true; // Продовжуємо гру
//     }
//
//     // Генерація вибору комп'ютера
//     const choices = ["камінь", "ножиці", "папір"];
//     let computerChoice = choices[Math.floor(Math.random() * 3)];
//
//     // Визначаємо переможця
//     let result = "";
//     if (userChoice === computerChoice) {
//         result = "Нічия!";
//     } else if (
//         (userChoice === "камінь" && computerChoice === "ножиці") ||
//         (userChoice === "ножиці" && computerChoice === "папір") ||
//         (userChoice === "папір" && computerChoice === "камінь")
//     ) {
//         result = "Ви виграли!";
//         userScore++;
//     } else {
//         result = "Ви програли!";
//         computerScore++;
//     }
//
//     // Виводимо результати
//     alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\n${result}\n
//            Ваш рахунок: ${userScore}\nРахунок комп'ютера: ${computerScore}`);
//     return true; // Продовжуємо гру
// }
//
// // Основний цикл гри
// while (true) {
//     let continueGame = playRound();
//     if (!continueGame) {
//         break; // Вихід з гри
//     }
// }





let userScore = 0;
let computerScore = 0;
let roundCount = 0; // Лічильник раундів
let maxRounds = 5;  // Максимальна кількість раундів

function playRound() {
    // Запитуємо вибір користувача
    let userChoice = prompt("Виберіть: камінь, ножиці, папір або введіть 'вихід' для завершення гри");

    // Перевірка, чи користувач хоче вийти
    if (userChoice.toLowerCase() === "вихід") {
        alert("Дякуємо за гру!");
        return false;  // Завершуємо гру
    }

    // Перевірка на коректність введеного вибору
    if (userChoice !== "камінь" && userChoice !== "ножиці" && userChoice !== "папір") {
        alert("Невірний вибір! Виберіть 'камінь', 'ножиці' або 'папір'.");
        return true; // Продовжуємо гру
    }

    // Генерація вибору комп'ютера
    const choices = ["камінь", "ножиці", "папір"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    // Визначаємо переможця
    let result = "";
    if (userChoice === computerChoice) {
        result = "Нічия!";
    } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        result = "Ви виграли!";
        userScore++;
    } else {
        result = "Ви програли!";
        computerScore++;
    }

    // Виводимо результати
    alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\n${result}\n
           Ваш рахунок: ${userScore}\nРахунок комп'ютера: ${computerScore}`);
    return true; // Продовжуємо гру
}

// Основний цикл гри з кількома раундами
while (roundCount < maxRounds) {
    let continueGame = playRound();
    if (!continueGame) {
        // Виводимо загальний рахунок після завершення гри
        alert(`Гра завершена!\nВаш загальний рахунок: ${userScore}\nЗагальний рахунок комп'ютера: ${computerScore}`);
        break; // Вихід з гри
    }

    roundCount++; // Збільшуємо лічильник раундів
}

// Якщо досягнуто максимальну кількість раундів
if (roundCount === maxRounds) {
    alert(`Гра завершена!\nВаш загальний рахунок: ${userScore}\nЗагальний рахунок комп'ютера: ${computerScore}`);
}

