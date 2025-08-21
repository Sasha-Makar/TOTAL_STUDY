function printName() {
    console.log('Hello');
    console.log('My name is Aleks');
    console.log('---');
}

// console.log(printName());
// console.log(printName);
printName();
printName();
printName();


function printName(name = 'DeFauLt') {
    // if (name===undefined) name = 'default';
    console.log('Hello');
    console.log(`My name is ${name}`);
    console.log('---');
}

// console.log(printName());
// console.log(printName);
printName('Aleks');
printName();
printName('Sasha');


function showMessage(text,counter) {
    if (typeof counter !== 'number') console.log('ERRoR');
    for (let i = 0; i < counter; i++) {
        console.log(text);
    }
}


showMessage('Hello', '22q');


function getValue() {
    return '12345'
}

let value = getValue();
console.log(value);


function add(x,y) {
    if (false) {
        let sum = x + y;
        return sum;
    }else {
        return -1
    }
}

let res = add(10, 20);
console.log(res);


