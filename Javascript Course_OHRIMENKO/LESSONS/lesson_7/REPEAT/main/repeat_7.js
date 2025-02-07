let product = {
    name: 'Phone',
    price: 1000,
    // displayInfo: function () {
    //     console.log(this.name);
    //     console.log(this.price);
    // }
    display: displayInfo
}
console.log(product);
console.log(product.name);
console.log(product.price);

console.log('===================');
// product.displayInfo();

product.display();


function displayInfo(name, price) {
    console.log(this.name);
    console.log(this.price);

}

//------------------------
console.log('-------');

displayInfo.apply({name: 'a', price: 1});


console.log('====================');


// function constuctor//fabrychna funkciya


function constructorCreateProduct(id, name, price) {
    let product = {};

    product.id = id;
    product.name = name;
    product.price = price;

    product.displayProduct = function () {
        console.log(this.id);
        console.log(this.name);
        console.log(this.price);
    }

    return product;

}

let product77 = constructorCreateProduct(5, 'apple', 55);
console.log(product77);
console.log(product77.name);
console.log('---');
product77.displayProduct();

console.log('-------=============--------');




