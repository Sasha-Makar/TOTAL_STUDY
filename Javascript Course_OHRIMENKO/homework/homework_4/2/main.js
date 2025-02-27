// let signs = ['+', '-', '*', '/'];
// let randomSigns = Math.floor(Math.random() * signs.length) +1;
// console.log(randomSigns);
//
// let symbols;
// switch (randomSigns) {
//     case 1:
//         symbols = '+';
//         console.log(randomSigns, symbols);
//         break;
//     case 2:
//         symbols = '-';
//         console.log(randomSigns, symbols);
//         break;
//     case 3:
//         symbols = '*';
//         console.log(randomSigns, symbols);
//         break;
//     case 4:
//         symbols = '/';
//         console.log(randomSigns, symbols);
//         break;
// }
// console.log(symbols);
// console.log('---');
// let num1 = Math.floor(Math.random() * 10) + 1;
// let num2 = Math.floor(Math.random() * 10) + 1;
// console.log(num1, num2);
//
// console.log('===========');


let correctAnswers = 0; // Лічильник правильних відповідей
let wrongAnswers = 0; // Лічильник неправильних відповідей
let totalQuestions = 5; // Кількість запитань у грі

// Функція для генерації математичних виразів
function generateQuestion() {
    // Генеруємо два випадкових числа від 1 до 10
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    // Генеруємо випадковий оператор (+, -, *, /)
    let operatorIndex = Math.floor(Math.random() * 4);
    let operator;
    let correctAnswer;

    switch (operatorIndex) {
        case 0: // Додавання
            operator = '+';
            correctAnswer = num1 + num2;
            break;
        case 1: // Віднімання
            operator = '-';
            correctAnswer = num1 - num2;
            break;
        case 2: // Множення
            operator = '*';
            correctAnswer = num1 * num2;
            break;
        case 3: // Ділення
            operator = '/';
            correctAnswer = (num1 / num2).toFixed(2); // Ділимо до двох знаків після коми
            break;
    }

    // Формуємо запитання
    let question = `${num1} ${operator} ${num2} = ?`;
    return { question, correctAnswer };
}

// Основний цикл гри
for (let i = 0; i < totalQuestions; i++) {
    let { question, correctAnswer } = generateQuestion();

    // Запитуємо відповідь у користувача
    let userAnswer = prompt(`${question}`);

    // Перевірка, чи введена відповідь правильна
    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
        correctAnswers++;
        alert("Правильна відповідь!");
    } else {
        wrongAnswers++;
        alert(`Неправильна відповідь! Правильна відповідь: ${correctAnswer}`);
    }
}

// Підсумкові результати
alert(`Гра завершена!\nПравильних відповідей: ${correctAnswers}\nНеправильних відповідей: ${wrongAnswers}`);
