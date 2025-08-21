// let obj1 = new Object();
// let obj2 = {};
//
//
//
//
// let product = {
//     name: 'Phone',
//     price : 10000
// }
//
//
// console.log(product);
//
// console.log(product.name);
//
// console.log(product.price);
//
//
// console.log('=======');
//
//
// let product2 = {};
// console.log(product2);
// product2.name = 'Laptop';
// product2.price = 50000;
// console.log(product2);
// console.log(product2.name);
// console.log(product2.id);
//
//
// console.log('========');
//
//
// let product3 = new Object()
// product3.name = 'Smart-TV';
// product3.price = 1000000;
//
//
// console.log(product3);


// let product1 = {
//     name: 'Phone',
//     price: 10000,
//
//     displayInfo: function () {
//         console.log(this.name);
//         console.log(this.price);
//     }
// }
//
//
// let product2 = {};
// product2.name = 'Laptop';
// product2.price = 30000;
// product2.displayInfo = function () {
//     console.log(this.name);
//     console.log(this.price);
// }
//
//
// // console.log(product1.name);
// // console.log(product1.price);
// console.log('===------======-----======');
// product1.displayInfo();
//
// console.log('==================');
//
// // console.log(product2.name);
// // console.log(product2.price);
// console.log('===------======-----======');
// product2.displayInfo();


// let product1 = {
//     name: 'Phone',
//     price: 10000,
//     displayInfo: display
// }
//
// let product2 = {};
// product2.name = 'Laptop';
// product2.price = 30000;
// product2.displayInfo = display;
//
// function display() {
//     console.log(this.name);
//     console.log(this.price);
// }
//
// display.apply({name: 'a', price: 1});//////call,bind
// console.log('-------');
// product1.displayInfo();
// console.log('--------');
// product2.displayInfo();


// ()=>{this}!!!!!!!!

// console.log('================');
// console.log('================');
// console.log('================');
//
// console.log('constructor');
//
//
// function creator(id,name,price) {
//     product = {};
//
//     product.id = id;
//     product.name = name;
//     product.price = price;
//     // product.displayInfo = display;
//
//     product.display= function () {
//         console.log(this.name);
//         console.log(this.price);
//     }
//     return product;
// }
//
// let product10 = creator(1, 'Chair', 1000);
// console.log('===');
// product10.display();
// console.log('---------------');
// console.log('---------------');
// console.log('---------------');
// let product11 = creator(2, 'Table', 5000);
// console.log('===');
// product11.display();
// console.log(product10);
// console.log(product11);


console.log('===Class===');


class Products {

    constructor(id,name,price) {

        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(this.name);
        console.log(this.price);
        console.log(this.id);
    }
}


let product_7 = new Products('QWE', 300, 7);
console.log(product_7);