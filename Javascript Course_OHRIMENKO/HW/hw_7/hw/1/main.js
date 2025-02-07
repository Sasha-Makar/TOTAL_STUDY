console.log('===================================');

//
// // Функція для створення об'єкта студента
// function createStudent(firstName, lastName, age, idNumber, averageGrade) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         idNumber: idNumber,
//         averageGrade: averageGrade
//     };
// }
//
// // Об'єкт для управління групою студентів
// const group = {
//     students: [], // Масив студентів
//
//     // Метод для додавання нового студента
//     addStudent(firstName, lastName, age, idNumber, averageGrade) {
//         const newStudent = createStudent(firstName, lastName, age, idNumber, averageGrade);
//         this.students.push(newStudent);
//         console.log(`Студента ${firstName} ${lastName} додано до групи.`);
//     },
//
//     // Метод для видалення студента за ідентифікаційним номером
//     removeStudent(idNumber) {
//         const studentIndex = this.students.findIndex(student => student.idNumber === idNumber);
//         if (studentIndex !== -1) {
//             this.students.splice(studentIndex, 1);
//             console.log(`Студента з ідентифікаційним номером ${idNumber} видалено з групи.`);
//         } else {
//             console.log(`Студента з ідентифікаційним номером ${idNumber} не знайдено.`);
//         }
//     },
//
//     // Метод для виведення списку всіх студентів
//     printAllStudents() {
//         if (this.students.length === 0) {
//             console.log("У групі немає студентів.");
//         } else {
//             console.log("Список студентів:");
//             this.students.forEach(student => {
//                 console.log(`Ім'я: ${student.firstName}, Прізвище: ${student.lastName},
//                 Вік: ${student.age}, Ідентифікаційний номер: ${student.idNumber},
//                 Середній бал: ${student.averageGrade}`);
//             });
//         }
//     },
//
//     // Метод для пошуку студента за ідентифікаційним номером
//     findStudentById(idNumber) {
//         const student = this.students.find(student => student.idNumber === idNumber);
//         if (student) {
//             console.log("Знайдений студент:");
//             console.log(`Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age},
//             Ідентифікаційний номер: ${student.idNumber}, Середній бал: ${student.averageGrade}`);
//         } else {
//             console.log(`Студента з ідентифікаційним номером ${idNumber} не знайдено.`);
//         }
//     }
// };
//
// // Додавання студентів до групи
// group.addStudent("Іван", "Іванов", 20, "12345", 4.5);
// group.addStudent("Марія", "Петренко", 21, "12346", 4.9);
// group.addStudent("Олег", "Коваль", 22, "12347", 4.2);
//
// // Виведення всіх студентів
// group.printAllStudents();
//
// // Пошук студента за ідентифікаційним номером
// group.findStudentById("12346");
//
// // Видалення студента
// group.removeStudent("12347");
//
// // Виведення всіх студентів після видалення
// group.printAllStudents();


console.log('=============================================================');

// Клас для створення об'єкта студента
class Student {
    constructor(firstName, lastName, age, idNumber, averageGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.idNumber = idNumber;
        this.averageGrade = averageGrade;
    }

    // Метод для виведення інформації про студента
    getInfo() {
        return `${this.firstName} ${this.lastName}, Вік: ${this.age}, ID: ${this.idNumber}, Середній бал: ${this.averageGrade}`;
    }
}

// Клас для управління групою студентів
class StudentGroup {
    constructor() {
        this.students = [];
    }

    // Метод для додавання студента
    addStudent(firstName, lastName, age, idNumber, averageGrade) {
        const newStudent = new Student(firstName, lastName, age, idNumber, averageGrade);
        this.students.push(newStudent);
    }

    // Метод для видалення студента за ідентифікаційним номером
    removeStudent(idNumber) {
        this.students = this.students.filter(student => student.idNumber !== idNumber);
    }

    // Метод для виведення списку всіх студентів
    listAllStudents() {
        if (this.students.length === 0) {
            console.log("Немає студентів в групі.");
        } else {
            this.students.forEach(student => {
                console.log(student.getInfo());
            });
        }
    }

    // Метод для пошуку студента за його ідентифікаційним номером
    findStudentById(idNumber) {
        const student = this.students.find(student => student.idNumber === idNumber);
        if (student) {
            console.log(student.getInfo());
        } else {
            console.log(`Студента з ID ${idNumber} не знайдено.`);
        }
    }
}

// Створення групи студентів
const group = new StudentGroup();

// Додавання студентів
group.addStudent("Іван", "Петренко", 20, "12345", 4.5);
group.addStudent("Марія", "Іванова", 22, "23456", 4.7);

// Виведення всіх студентів
console.log("Список студентів:");
group.listAllStudents();

// Пошук студента за ID
console.log("\nПошук студента з ID 12345:");
group.findStudentById("12345");

// Видалення студента за ID
group.removeStudent("12345");
console.log("\nСписок студентів після видалення:");
group.listAllStudents();

// Пошук студента після видалення
console.log("\nПошук студента з ID 12345:");
group.findStudentById("12345");


// function capitalizeWords(...words) {
//     return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
//
// // Приклад використання:
// console.log(capitalizeWords('це', 'приклад', 'функції', 'в', 'javascript'));



