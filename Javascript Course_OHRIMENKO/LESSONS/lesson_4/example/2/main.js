// написати чи є написаний користувачем рядок паліндромом
// (чи читається він зліва-направо і направо-зліва -  однаково)


let initialValue = 'sdid';
// let initialValue = 'abccba';
// let initialValue = ' І що сало ласощі';


// let value = initialValue.replace(/\s+/g,'').toLowerCase();
//
// let isPalindrom =true;
// // debugger;
// for (let i = 0; i < value.length / 2; i++) {
//     if (value[i] !== value[value.length - 1 - i]) {
//
//         isPalindrom = false;
//         break;
//     }
// }
//
//     if (isPalindrom) {
//         alert(initialValue + ' Є паліндромом');
//
//     }else {
//         alert(initialValue + ' НЕ Є паліндромом');
//     }


let value = '';
for (let i = 0; i < initialValue.length; i++) {
    if (initialValue[i] !== ' ') {
        value += initialValue[i].toLowerCase();
    }
}

console.log(value);

let len = value.length;
let isPalindrome = true;
for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    alert(initialValue + ' IS PALINDROME');
}else {
    alert(initialValue + ' is not palindrome');
}
