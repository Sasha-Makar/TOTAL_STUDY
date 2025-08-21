// // 1. Введення вибору користувача
// let userChoice = prompt("Виберіть: камінь, ножиці або папір").toLowerCase();
//
// // Перевірка правильності введеного вибору
// if (userChoice !== "камінь" && userChoice !== "ножиці" && userChoice !== "папір") {
//     alert("Неправильний вибір! Будь ласка, виберіть камінь, ножиці або папір.");
// } else {
//     // 2. Генерація вибору комп'ютера
//     let choices = ["камінь", "ножиці", "папір"];
//     let computerChoice = choices[Math.floor(Math.random() * 3)];
//
//     // 3. Визначення переможця
//     let result;
//     if (userChoice === computerChoice) {
//         result = "Нічия!";
//     } else if (
//         (userChoice === "камінь" && computerChoice === "ножиці") ||
//         (userChoice === "ножиці" && computerChoice === "папір") ||
//         (userChoice === "папір" && computerChoice === "камінь")
//     ) {
//         result = "Ви виграли!";
//     } else {
//         result = "Ви програли!";
//     }
//
//     // 4. Виведення результату
//     alert("Ваш вибір: " + userChoice + "\nВибір комп'ютера: " + computerChoice + "\nРезультат: " + result);
// }


//////////////////////////////


// // Функція для запиту вибору користувача
// function getUserChoice() {
//     let userChoice = prompt("Виберіть: камінь, ножиці або папір").toLowerCase();
//     if (userChoice !== "камінь" && userChoice !== "ножиці" && userChoice !== "папір") {
//         alert("Неправильний вибір! Будь ласка, виберіть камінь, ножиці або папір.");
//         return getUserChoice(); // Якщо вибір неправильний, знову запитує
//     }
//     return userChoice;
// }
//
// // Функція для генерації вибору комп'ютера
// function getComputerChoice() {
//     let choices = ["камінь", "ножиці", "папір"];
//     return choices[Math.floor(Math.random() * 3)];
// }
//
// // Функція для визначення результату гри
// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return "Нічия!";
//     } else if (
//         (userChoice === "камінь" && computerChoice === "ножиці") ||
//         (userChoice === "ножиці" && computerChoice === "папір") ||
//         (userChoice === "папір" && computerChoice === "камінь")
//     ) {
//         return "Ви виграли!";
//     } else {
//         return "Ви програли!";
//     }
// }
//
// // Функція для виведення результату
// function displayResult(userChoice, computerChoice, result) {
//     alert("Ваш вибір: " + userChoice + "\nВибір комп'ютера: " + computerChoice + "\nРезультат: " + result);
// }
//
// // Основна функція гри
// function playGame() {
//     let userChoice = getUserChoice();
//     let computerChoice = getComputerChoice();
//     let result = determineWinner(userChoice, computerChoice);
//     displayResult(userChoice, computerChoice, result);
// }
//
// // Запуск гри
// playGame();


//////////////////////////////////////////////////////////////////////////


// // Ось ще кілька варіантів реалізації гри "Камінь, ножиці, папір" з використанням функцій.
// //     Кожен варіант має різний підхід до організації коду:
// //
// //     ### Варіант 1: Розбиття на окремі функції для кожної логіки
// //
// //     ```javascript
// // Функція для запиту вибору користувача
// function promptUserChoice() {
//     let userChoice = prompt("Виберіть: камінь, ножиці або папір").toLowerCase();
//     return userChoice;
// }
//
// // Функція для генерації випадкового вибору комп'ютера
// function generateComputerChoice() {
//     const options = ["камінь", "ножиці", "папір"];
//     return options[Math.floor(Math.random() * options.length)];
// }
//
// // Функція для визначення переможця
// function getWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return "Нічия!";
//     } else if ((userChoice === "камінь" && computerChoice === "ножиці") ||
//                (userChoice === "ножиці" && computerChoice === "папір") ||
//                (userChoice === "папір" && computerChoice === "камінь")) {
//         return "Ви виграли!";
//     } else {
//         return "Ви програли!";
//     }
// }
//
// // Функція для відображення результату
// function showResult(userChoice, computerChoice, result) {
//     alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\nРезультат: ${result}`);
// }
//
// // Головна функція для запуску гри
// function playRockPaperScissors() {
//     const userChoice = promptUserChoice();
//     const computerChoice = generateComputerChoice();
//     const result = getWinner(userChoice, computerChoice);
//     showResult(userChoice, computerChoice, result);
// }
//
// // Запуск гри
// playRockPaperScissors();


// ### Варіант 2: Використання об'єкта для результату гри


// // Функція для запиту вибору користувача
// function getUserChoice() {
//     return prompt("Виберіть: камінь, ножиці або папір").toLowerCase();
// }
//
// // Функція для генерації вибору комп'ютера
// function getComputerChoice() {
//     const choices = ["камінь", "ножиці", "папір"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }
//
// // Функція для визначення результату гри
// function getGameResult(userChoice, computerChoice) {
//     const resultMatrix = {
//         "камінь": {
//                     "камінь": "Нічия!",
//                     "ножиці": "Ви виграли!",
//                     "папір": "Ви програли!"
//                   },
//         "ножиці": { "камінь": "Ви програли!", "ножиці": "Нічия!", "папір": "Ви виграли!" },
//         "папір": { "камінь": "Ви виграли!", "ножиці": "Ви програли!", "папір": "Нічия!" }
//     };
//     return resultMatrix[userChoice][computerChoice];
// }
//
// // Функція для виведення результату
// function displayOutcome(userChoice, computerChoice, result) {
//     alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\nРезультат: ${result}`);
// }
//
// // Основна функція для гри
// function playGame() {
//     const userChoice = getUserChoice();
//     const computerChoice = getComputerChoice();
//     const result = getGameResult(userChoice, computerChoice);
//     displayOutcome(userChoice, computerChoice, result);
// }
//
// // Запуск гри
// playGame();
//
//
// // ### Варіант 3: Перевірка вибору через масив і використання цикла для обробки результату
//
// // Функція для запиту вибору користувача
// function getUserChoice() {
//     let choice;
//     do {
//         choice = prompt("Виберіть: камінь, ножиці або папір").toLowerCase();
//     } while (!["камінь", "ножиці", "папір"].includes(choice)); // Перевірка на правильність вибору
//     return choice;
// }
//
// // Функція для генерації вибору комп'ютера
// function getComputerChoice() {
//     const choices = ["камінь", "ножиці", "папір"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }
//
// // Функція для визначення результату
// function determineWinner(userChoice, computerChoice) {
//     const outcomes = {
//         "камінь": { "камінь": "Нічия!", "ножиці": "Ви виграли!", "папір": "Ви програли!" },
//         "ножиці": { "камінь": "Ви програли!", "ножиці": "Нічия!", "папір": "Ви виграли!" },
//         "папір": { "камінь": "Ви виграли!", "ножиці": "Ви програли!", "папір": "Нічия!" }
//     };
//     return outcomes[userChoice][computerChoice];
// }
//
// // Функція для виведення результату
// function displayResult(userChoice, computerChoice, result) {
//     alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\nРезультат: ${result}`);
// }
//
// // Головна функція гри
// function startGame() {
//     const userChoice = getUserChoice();
//     const computerChoice = getComputerChoice();
//     const result = determineWinner(userChoice, computerChoice);
//     displayResult(userChoice, computerChoice, result);
// }
//
// // Запуск гри
// startGame();


// ### Пояснення:
// - У **першому варіанті** кожну частину гри організовано в окрему функцію для чистоти коду.
// - У **другому варіанті** використано об'єкт для зберігання результатів гри, що дозволяє
//  швидше отримувати результат, не вимагаючи великої кількості умовних конструкцій.
// - У **третьому варіанті** також використано об'єкт для результатів, але з перевіркою
// правильності вибору через цикл, що змушує користувача вибирати лише один з трьох варіантів.
//
// Ці варіанти надають різні способи організації коду, які можуть бути корисними залежно
// від складності задачі або стилю програмування.


//
//
// ////////////////////////////////////////////
//
//
// // Функція для запиту вибору користувача
// function getUserChoice() {
//     let choice;
//     do {
//         choice = prompt("Виберіть: камінь, ножиці або папір. Для виходу введіть 'вихід'.").toLowerCase();
//     } while (choice !== "камінь" && choice !== "ножиці" && choice !== "папір" && choice !== "вихід");
//     return choice;
// }
//
// // Функція для генерації вибору комп'ютера
// function getComputerChoice() {
//     const choices = ["камінь", "ножиці", "папір"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }
//
// // Функція для визначення результату
// function determineWinner(userChoice, computerChoice) {
//     const outcomes = {
//         "камінь": { "камінь": "Нічия!", "ножиці": "Ви виграли!", "папір": "Ви програли!" },
//         "ножиці": { "камінь": "Ви програли!", "ножиці": "Нічия!", "папір": "Ви виграли!" },
//         "папір": { "камінь": "Ви виграли!", "ножиці": "Ви програли!", "папір": "Нічия!" }
//     };
//     return outcomes[userChoice][computerChoice];
// }
//
// // Функція для виведення результату
// function displayResult(userChoice, computerChoice, result) {
//     alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\nРезультат: ${result}`);
// }
//
// // Функція для гри кілька раундів
// function playRounds() {
//     let userScore = 0;
//     let computerScore = 0;
//     let roundCount = 0;
//
//     while (true) {
//         let userChoice = getUserChoice();
//
//         if (userChoice === "вихід") {
//             break; // Вихід з гри
//         }
//
//         let computerChoice = getComputerChoice();
//         let result = determineWinner(userChoice, computerChoice);
//
//         displayResult(userChoice, computerChoice, result);
//
//         if (result === "Ви виграли!") {
//             userScore++;
//         } else if (result === "Ви програли!") {
//             computerScore++;
//         }
//
//         roundCount++;
//         alert(`Раунд ${roundCount} завершено!\nВаш рахунок: ${userScore}\nРахунок комп'ютера: ${computerScore}`);
//     }
//
//     // Після завершення гри вивести загальний результат
//     alert(`Гра завершена!\nЗагальний рахунок: Ви ${userScore} - Комп'ютер ${computerScore}`);
// }
//
// // Запуск гри
// playRounds();


/*Завдання 1: Гра кілька раундів з підрахунком загального рахунку.
Завдання 2: Можливість вийти з гри за допомогою введення "вихід".
javascript
Копіювати код
*/
/*Пояснення змін:
Гра кілька раундів:
Додається змінні userScore і computerScore для підрахунку рахунку кожного гравця.
Кожен раунд продовжується до введення користувачем команди "вихід".
Кількість раундів відслідковується через змінну roundCount.
Після кожного раунду відображається рахунок.
Можливість вийти з гри:
Додано перевірку на введення "вихід". Якщо користувач вводить "вихід", гра припиняється.
Функціональність:
Після завершення гри виводиться загальний рахунок за всі раунди.
У разі введення "вихід" програма припиняє виконання циклу і виводить результат гри.
Приклад використання:
Користувач може грати кілька раундів.
Після кожного раунду буде відображатися поточний рахунок.
Користувач може завершити гру, ввівши "вихід".
Це дозволяє більш гнучко контролювати гру та забезпечує зручність для користувача.*/


//1

// let userChoice;
// while (true) {
//     userChoice = prompt('enter your choice (камінь, ножиці, папір)');
//
//     let validValue = userChoice.trim().toLowerCase();
//
//     if (validValue === 'камінь' || validValue === 'ножиці' || validValue === 'папір') {
//         userChoice = validValue;
//         console.log(userChoice);
//         break;
//     } else {
//         alert('enter correct value!!!');
//     }
//
// }
//
// let comp = ['камінь', 'ножиці', 'папір'];
// let compChoice = Math.floor(Math.random() * comp.length);
// console.log(comp[compChoice] );
//
//
// if (userChoice === compChoice) {
//     alert('Однакові вибори - нічия');
// }else if ( (userChoice ==='камінь'&& compChoice ==='ножиці') ||
//           (userChoice ==='ножиці' && compChoice === 'папір') ||
//           (userChoice ==='папір' && compChoice === 'камінь')) {
//     alert('YOU WIN');
// }else {
//     alert('computer WIN')
// }





























