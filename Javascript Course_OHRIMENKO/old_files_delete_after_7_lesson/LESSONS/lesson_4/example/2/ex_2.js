// написати чи є написаний користувачем рядок паліндромом
// (чи читається він зліва-направо і направо-зліва -  однаково)


// let initiateValue = 'abc1cba';
//
// // let initiateValue = 'І ЩО САЛО ЛАСОЩІ';
// let value = initiateValue.replace(/\s+/g, '').toLowerCase();
// // console.log(value);
//
//
// // let len = value.length;
// // // console.log(len);
// //
// // let isPalindrome;
// //
// // for (let i = 0; i < len/2; i++) {
// //     if (value[i] !== value[len - 1 - i]) {
// //         isPalindrome = false;
// //         break;
// //     }
// //         isPalindrome = true;
// // }
// //
// // if (isPalindrome){
// //     alert('даний вираз ' + initiateValue + ' являється ПАЛІНДРОМОМ');
// // }else {
// //     alert('даний вираз ' + initiateValue + ' НЕявляється ПАЛІНДРОМОМ');
// // }



//1

// debugger;
// let value = 'abc1231cba';
//
//
// let len = value.length;
//
// let isPalindrome;
// for (let i = 0; i < len / 2; i++) {
//     if (value[i] !== value[len - 1 -i]){
//         isPalindrome = false
//         break;
//     }
//     isPalindrome = true;
// }
//
// if (!isPalindrome){
//     alert(value + ' is not palindrome');
// }else {
//     alert(value + ' is PALINDROME');
// }




//2

// let initValue = 'І що саqwqeqло ласощі';
//
// let value = initValue.replace(/\s+/g, '').toLowerCase();
// // console.log(value);
// let isPalindrome;
// for (let i = 0; i < value.length; i++) {
//     if (value[i] !== value[value.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
//     isPalindrome = true;
// }
//
// if (isPalindrome) {
//     alert(initValue + ' is PALINDROME');
// }else {
//     alert(initValue + ' is NOT palindrome!!!');
// }