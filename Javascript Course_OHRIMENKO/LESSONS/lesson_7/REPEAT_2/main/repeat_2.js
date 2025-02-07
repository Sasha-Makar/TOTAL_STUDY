



let product1 = {
    name: 'phone',
    price: 10000,
    // displayInfo : function () {
    //     console.log(this.name);
    //     console.log(this.price);
    // }
    displayInfo : display
}

let product2 = {};
product2.name = 'laptop';
product2.price = 50000;
// product2.displayInfo = function () {
//     console.log(this.name);
//     console.log(this.price);
// }
product2.displayInfo = display;


let product3 = new Object();
product3.name = 'lamp';
product3.price = 5000;
// product3.displayInfo = function () {
//     console.log(this.name);
//     console.log(this.price);
// }
product3.displayInfo = display;


function display() {
    console.log(this.name);
    console.log(this.price);
}

product1.displayInfo();
console.log('===');
product2.displayInfo();
console.log('===');
product3.displayInfo();
console.log('===');

console.log('======================================--------------------======================');

display.apply({name:'clock', price: 500});


console.log('------=======фабричні функції + класи=======--------');



function createProduct(id,name,price) {

    let product = {};

    product.id = id;
    product.name = name;
    product.price = price;
    product.displayInfo = function () {
        console.log('ID-' + this.id);
        console.log(this.name);
        console.log(this.price);
    }

    return product;
}

let product5 = createProduct(5, 'apple', 70);
let product7 = createProduct(7, 'banana', 77);

product5.displayInfo();
console.log('---');
product7.displayInfo();
console.log('--======--');


class Product {
    constructor(id,name,price) {
        this.id = id;
        this.name=name;
        this.price=price;
    }
    displayInfo(){
        console.log('ID-' + this.id);
        console.log(this.name);
        console.log(this.price);
    }
}

let product11 = new Product(11, 'bread', 30);
let product17 = new Product(17, 'milk', 37);

product11.displayInfo();
console.log('===');
product17.displayInfo();