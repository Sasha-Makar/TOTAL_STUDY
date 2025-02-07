/*2_написати чи є написаний користувачем
рядок паліндромом(чи читається він
зліва-направо і направо-зліва-однаково)*/

let initValue = 'І ЩО САЛО ЛАСОЩІ';
let value = initValue.replace(/\s+/g, '').toLowerCase();



let len = value.length;

let isPalindrome;
for (let i = 0; i < len / 2; i++) {

    if (value[i] !== value[len - 1 -i]){
        isPalindrome = false;
        break;
    }
        isPalindrome = true;
}

if (isPalindrome){
    alert(`${initValue} is palindrome`);
}else {
    alert(`${initValue} is NOT palindrome`);
}