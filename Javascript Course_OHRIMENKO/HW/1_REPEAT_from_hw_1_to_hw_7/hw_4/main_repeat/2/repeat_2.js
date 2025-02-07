// let initialValue2 = 'І що сало ласощі';
//
// let initialValue1 = 'abc12cba';
//
//
//
// // let value = initialValue2.replace(/\s+/g,'').toLowerCase();
// // console.log(value);
// let value = initialValue1.split(' ').join('').toLowerCase();
// console.log(value);
//
// let len = value.length;
//
// for (let i = 0; i < len/2; i++) {
//     if (value[i] !== value[len-1-i]){
//         alert(initialValue1 + ' is NOT palindrome');
//         break;
//     }else {
//         alert(initialValue1 + ' is palindrome');
//     }
//
// }


let initialValue1 = 'abc12cba';

// Приводимо до нижнього регістру
let value = initialValue1.toLowerCase();
let len = value.length;
let isPalindrome = true; // прапорець для перевірки

for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

// Виводимо результат лише один раз
if (isPalindrome) {
    alert(initialValue1 + ' is a palindrome');
} else {
    alert(initialValue1 + ' is NOT a palindrome');
}


