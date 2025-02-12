// написати чи є написаний користувачем рядок паліндромом
// (чи читається він зліва-направо і направо-зліва -  однаково)

// let palindrome = 'дід';
// let palindrome = 'abccba';
//
//
// let len = palindrome.length;
//
// for (let i = 0; i < len/2; i++) {
//     if (palindrome[i]!==palindrome[len-1-i]){
//         alert('its NOT a palindrome');
//         break;
//     }else {
//         alert('its palindrome');
//         break;
//     }
// }

// let value = 'abc12cba';
//
// let len = value.length;
// let isPalindrome;
// for (let i = 0; i < len/2; i++) {
//     if (value[i] !== value[len-1-i]){
//         isPalindrome = false;
//         break;
//     }
//     isPalindrome = true;
// }
//
// if (isPalindrome){
//     alert(value + ' is palindrome')
// }else {
//     alert(value + ' is NOT palindrome');
// }

let initialValue = 'І що сало ласощі';
// let value = initialValue.replace(/\s+/g,'').toLowerCase();
let value = initialValue.split(' ').join('').toLowerCase();

let len = value.length;
let isPalindrome;
for (let i = 0; i < len/2; i++) {
    if (value[i] !== value[len-1-i]){
        isPalindrome = false;
        break;
    }
    isPalindrome = true;
}

if (isPalindrome){
    alert(value + ' is palindrome')
}else {
    alert(value + ' is NOT palindrome');
}