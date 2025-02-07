// let product1 = {
//     name: 'Phone',
//     price: 1000,
//     displayInfo : function () {
//         console.log(this.name);
//         console.log(this.price);
//     }
//
// }
// let product2 = {};
// product2.name = 'Laptop';
// product2.price = 20000;
// product2.displayInfo = function () {
//     console.log(this.name);
//     console.log(this.price);
// }
//
//
// let product3 = new Object();
// product3.name = "PC";
// product3.displayInfo = function () {
//     console.log(this.name);
//     console.log(this.price);
// }


// product1.displayInfo()
// product2.displayInfo()
// product3.displayInfo()

//
// function display() {
//     console.log(this.name);
//     console.log(this.price);
// }
//
// let product1 = {
//     name: 'Phone',
//     price: 1000,
//     // displayInfo : function () {
//     //     console.log(this.name);
//     //     console.log(this.price);
//     // }
//     displayInfo: display
//
// }
// let product2 = {};
// product2.name = 'Laptop';
// product2.price = 20000;
// // product2.displayInfo = function () {
// //     console.log(this.name);
// //     console.log(this.price);
// // }
// product2.displayInfo = display;
//
// let product3 = new Object();
// product3.name = "PC";
// // product3.displayInfo = function () {
// //     console.log(this.name);
// //     console.log(this.price);
// // }
// product3.displayInfo = display;
//
//
// product1.displayInfo();
// product2.displayInfo();
// product3.displayInfo();
//
//
// console.log('=======================');
//
// let a = {name: 'a', price: 2};
// display.apply(a);
// // display.call(a);
// // display.bind(a);
//
// console.log('==================');
// console.log('konstructors');
//
//
// function createProduct(id, name, price) {
//     let product = {};
//
//     product.id = id;
//     product.name = name;
//     product.price = price;
//     product.displayInfo = function () {
//         console.log(this.name);
//         console.log(this.price);
//     }
//
//     return product;
// }
//
// let product4 = createProduct(7, 'Nissan', 1700000);
// let product5 = createProduct(10, 'NIKO', 170);
//
// console.log(product4);
// console.log(product5);
// console.log('---');
// product4.displayInfo();
// product5.displayInfo();
//
// console.log('---------------------');
// console.log('---------------------');
// console.log('---------------------');
//
//
// class Product {
//     constructor(id, name, price) {
//
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
//         displayInfo (){
//             console.log(this.name);
//             console.log(this.price);
//         };
// }
//
// let product10 = new Product(11, 'choco', 1000);
// console.log(product10);
// console.log('---');
// product10.displayInfo();

// =============REPEAT_LESSON=====================//
// =============REPEAT_LESSON=====================//
// =============REPEAT_LESSON=====================//



let product1 = {
    name: 'Phone',
    price:10000,
    // displayInfo:1
    // displayInfo:function () {
    //     console.log(this.name);
    //     console.log(this.price);
    // }
    displayInfo : display
}


function display() {
    console.log(this.name);
    console.log(this.price);
}

let product2 = {}
product2.name = 'Laptop';
product2.price = 20000;
product2.displayInfo = display;

let product3 = new Object();
product3.name = 'PComp';
product3.price = 25000;
product3.displayInfo=display;

console.log('================');

console.log(product1);
console.log(product1.name);
console.log('-method-');
product1.displayInfo();

console.log('---');

console.log(product2);
console.log(product2.name);
product2.displayInfo();

console.log('---');

console.log(product3);
console.log(product3.name);
product3.displayInfo();

console.log('***************');

display.apply({name:'A', price: 17171});


console.log('==============');
console.log('==============');
console.log('==============');
console.log('==============');
console.log('==============');
console.log('==============');
console.log('==============');


function createProduct(id,name,price) {
    let product = {};

    product.id = id;
    product.name=name;
    product.price = price;
    product.displayInfo = display;

    return product;
}


let product5 = createProduct(10, 'Car', 100000000);
let product7 = createProduct(11, 'Fox', 150000);
console.log(product7);
console.log(product5);
console.log('----=======-------');
product5.displayInfo();
console.log('---');
product7.displayInfo();

console.log('=========');

class Product {
    constructor(id,name,price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayInfo () {
        console.log(this.id);
        console.log(this.name);
        console.log(this.price);
    }

}

let product11 = new Product(100, 'Bread', 29);
console.log(product11);
console.log('###');
product11.displayInfo();
