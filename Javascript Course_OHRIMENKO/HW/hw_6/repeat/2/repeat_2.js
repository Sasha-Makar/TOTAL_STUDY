/*напишіть сценарій який знайде в массиві
 всі відємні значення та замінить їх на
 значення 0. Після цього виведіть всі
 значення массиву.*/

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
console.log(values);
// let newArr = [];
for (let i = 0; i < values.length ; i++) {
    if (values[i] < 0){
        values[i] = 0;
        // newArr.push(values[i]);
    }
}
console.log(values);
// console.log(newArr);
console.log('=======');

values.forEach((value,index)=> console.log('index ' + index + ' = ' + value))


// values.forEach((value, index) => console.log(`index ${index} = ${value}`));