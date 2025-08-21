//Завдання: Написати програму для управління інформацією про студентів у групі. Програма повинна
//дозволяти додавати нових студентів,видаляти студентів і виводити інформацію про всіх студентів.
//(!!!)Кроки для виконання завдання:
//1)Створити конструктор або фабричну функцію для створення об'єктів студентів:
//Кожен об'єкт студента повинен містити наступні властивості:ім'я,прізвище,вік,ідентифікаційний номер,середній бал.++
//2)Створити об'єкт для управління групою студентів:
//Цей об'єкт повинен містити масив студентів та методи для додавання, видалення і виведення інформації про студентів.
//3)Додати метод для додавання нового студента:
//Метод повинен приймати параметри для створення нового об'єкта студента і додавати його до масиву.
//4)Додати метод для видалення студента:
//Метод повинен видаляти студента за його ідентифікаційним номером.
//5)Додати метод для виведення списку всіх студентів:
//Метод повинен виводити на екран список студентів із зазначенням всіх їхніх властивостей.
//6)Додати функціонал для пошуку студента за його ідентифікаційним номером:
//Метод повинен шукати студента в масиві і повертати всю інформацію про нього.



// class Students {
//
//     constructor(id,name,lastName,age,avgScore) {
//
//         this.id = id;
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//         this.avgScore = avgScore;
//     }
// }
//
// let student = new Students(1, 'Marko', 'Rudy', 20, 178);
// console.log(student);


function Students(id, firstName, lastName, age, avgScore) {
    return {
        id : id,
        firstName:firstName,
        lastName:lastName,
        age:age,
        avgScore:avgScore
    }
}


let student1 = new Students(1, 'Marko', 'Rudy', 20, 178);
console.log(student1);


let studentCart = {
    students : [],

    addStudent(id, firstName, lastName, age, avgScore){
        const newStudent = new Students(id, firstName, lastName, age, avgScore);
        this.students.push(newStudent);
    },

    removeStudent(id){
        this.students = this.students.filter(student => student.id !== id);
    },

    showList(){
        this.students.forEach(item => console.log(`student ID-${item.id}\nstudent name-${item.firstName}\nstudent last name-${item.lastName}\nstudent age-${item.age}\nstudent average score-${item.avgScore}`));
    }
    
}


let studentDataBase = {


};


let uiController = {};


studentCart.addStudent(11, 'qwe', 'asd', 45, 150);
studentCart.addStudent(12, 'qwerrre', 'asdasad', 445, 1540);
studentCart.showList();

console.log(studentCart.students);
studentCart.removeStudent(12);
console.log(studentCart.students);
