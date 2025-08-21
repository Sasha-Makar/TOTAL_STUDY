// написати чи є написаний користувачем рядок паліндромом
// (чи читається він зліва-направо і направо-зліва -  однаково)

let initialValue = ' abccba';
// let initialValue = ' І що сало ласощі';
let length = initialValue.length;
let newValue = '';
for (let i = 0; i < length; i++) {
    if (initialValue[i] !== ' ') {
        newValue += initialValue[i];
    }
}
console.log(newValue);

let value = newValue.toLowerCase();
console.log(value);


console.log('======');

let isPalindrome = true;
for (let j = 0; j < value.length / 2; j++) {
    if (value[j] !== value[value.length - 1 - j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(initialValue + ' is palindrome');
}else {
    console.log(initialValue + ' is NOT palindrome');
}


