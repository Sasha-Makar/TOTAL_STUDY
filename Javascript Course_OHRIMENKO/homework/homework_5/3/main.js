//Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник,
//трикутник). Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.
//circle
//rectangle
//triangle
// Кроки для виконання завдання:
//1. Створити функцію для обчислення площі та периметру кола:
//- Функція повинна приймати радіус кола.
//-Використайте формули: площа = π * r²,
//периметр = 2 * π * r.
//2.Створити функцію для обчислення площі та периметру прямокутника:
//-Функція повинна приймати довжину і ширину прямокутника.
//-Використайте формули: площа = довжина * ширина, периметр = 2 * (довжина + ширина).
//3. Створити функцію для обчислення площі та периметру трикутника:
//-Функція повинна приймати довжини трьох сторін трикутника.
//-Використайте формули: площа = √(p * (p - a) * (p - b) * (p - c)),
//де p = (a + b + c) / 2, периметр = a + b + c.
//4.Запросити користувача вибрати фігуру і ввести відповідні параметри:
//-Використайте `prompt` для запиту типу фігури та відповідних параметрів.
//5.Обчислити площу та периметр вибраної фігури:
//-Викликати відповідні функції для обчислення площі та периметру.
//6.Вивести результати:
//-Використайте `alert` для виведення результатів обчислень.

// Утилітна функція для парсингу чисел із підтримкою коми як десяткового роздільника
const parseNumber = (input) => {
    if (typeof input !== 'string') return NaN;
    return parseFloat(input.replace(',', '.'));
};

// Утилітна функція для форматування чисел у форматі з комою
const formatNumber = (number, decimals = 1) => {
    return number.toFixed(decimals).replace('.', ',');
};

// Функція для валідації додатних чисел
const isValidPositiveNumber = (num) => !isNaN(num) && num > 0;

// Об'єкт із функціями для обчислень геометричних фігур
const shapes = {
    circle: {
        calculate: (radius) => {
            if (!isValidPositiveNumber(radius)) {
                throw new Error('Радіус має бути додатним числом.');
            }
            const area = Math.PI * radius ** 2;
            const perimeter = 2 * Math.PI * radius;
            return { area, perimeter };
        },
        promptParams: () => {
            const radiusInput = prompt('Введіть радіус кола (у метрах, наприклад, 1,5):');
            return [parseNumber(radiusInput)];
        },
        resultMessage: ({ area, perimeter }) =>
            `Коло:\nПлоща: ${formatNumber(area)} кв.м\nПериметр: ${formatNumber(perimeter)} м`
    },
    rectangle: {
        calculate: (length, width) => {
            if (!isValidPositiveNumber(length) || !isValidPositiveNumber(width)) {
                throw new Error('Довжина та ширина мають бути додатними числами.');
            }
            const area = length * width;
            const perimeter = 2 * (length + width);
            return { area, perimeter };
        },
        promptParams: () => {
            const lengthInput = prompt('Введіть довжину прямокутника (у метрах, наприклад, 2,5):');
            const widthInput = prompt('Введіть ширину прямокутника (у метрах, наприклад, 1,5):');
            return [parseNumber(lengthInput), parseNumber(widthInput)];
        },
        resultMessage: ({ area, perimeter }) =>
            `Прямокутник:\nПлоща: ${formatNumber(area)} кв.м\nПериметр: ${formatNumber(perimeter)} м`
    },
    triangle: {
        calculate: (a, b, c) => {
            if (!isValidPositiveNumber(a) || !isValidPositiveNumber(b) || !isValidPositiveNumber(c)) {
                throw new Error('Сторони трикутника мають бути додатними числами.');
            }
            if (a + b <= c || b + c <= a || a + c <= b) {
                throw new Error('Сторони не утворюють трикутник.');
            }
            const p = (a + b + c) / 2; // Напівпериметр
            const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            const perimeter = a + b + c;
            return { area, perimeter };
        },
        promptParams: () => {
            const aInput = prompt('Введіть довжину першої сторони трикутника (у метрах, наприклад, 3,0):');
            const bInput = prompt('Введіть довжину другої сторони трикутника (у метрах, наприклад, 4,0):');
            const cInput = prompt('Введіть довжину третьої сторони трикутника (у метрах, наприклад, 5,0):');
            return [parseNumber(aInput), parseNumber(bInput), parseNumber(cInput)];
        },
        resultMessage: ({ area, perimeter }) =>
            `Трикутник:\nПлоща: ${formatNumber(area)} кв.м\nПериметр: ${formatNumber(perimeter)} м`
    }
};

// Головна функція для обробки введення та виведення результатів
function calculateShape() {
    const shapeInput = prompt('Введіть тип фігури (коло, прямокутник, трикутник):').toLowerCase().trim();
    const shape = shapes[shapeInput];

    if (!shape) {
        alert('Невідомий тип фігури. Введіть "коло", "прямокутник" або "трикутник".');
        return;
    }

    try {
        const params = shape.promptParams();
        const result = shape.calculate(...params);
        alert(shape.resultMessage(result));
    } catch (error) {
        alert(`Помилка: ${error.message}`);
    }
}

// Запуск програми
calculateShape();