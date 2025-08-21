/*напишіть сценарій який знайде в массиві всі відємні значення та замінить їх на
значення 0. Після цього виведіть всі значення массиву.*/

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

function replace(arr) {
    let index = 0
    for (let el of arr) {
        if (el < 0){
            arr[index] = 0;
        }
        index++;
    }
    return arr;
}

let replace1 = replace(values);
console.log(replace1);



