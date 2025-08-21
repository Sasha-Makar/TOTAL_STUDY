// let random = Math.floor(Math.random() * 100) + 1;
//
// console.log(random);
//
// while (true) {
//     let value = Number(prompt('enter your number'));
//     if (value === random) {
//         alert('you WIN');
//         break;
//     } else if (value > random) {
//         alert(value + ' більше ніж загадане число');
//     } else {
//         alert(value + ' меньше ніж загадане число');
//     }
// }



let random = Math.floor(Math.random() * 100) + 1;

console.log(random);
let isOver = false
while (!isOver) {
    let value = Number(prompt('enter your number'));
    if (value === random) {
        alert('you WIN');
        isOver = true;
    } else if (value > random) {
        alert(value + ' більше ніж загадане число');
    } else {
        alert(value + ' меньше ніж загадане число');
    }
}