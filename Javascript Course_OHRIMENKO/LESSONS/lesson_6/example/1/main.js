/*напиши сценарій який знайде мінімальне,максимальне значення в масивіа також виведе суму всіх елементів масиву*/


let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

// let minValue = (array)=>array.forEach()
function min(arr) {
    let value = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < value) {
            value = arr[i];
        }
    }
    return value;
}

let min1 = min(values);
console.log(min1);





let val = 0;
values.forEach((item)=>{
    return val+=item;
})
// let res = sum(values);
console.log(val);

