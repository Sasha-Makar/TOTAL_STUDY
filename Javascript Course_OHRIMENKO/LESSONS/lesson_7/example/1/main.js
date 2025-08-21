// // масив із іменами продуктів
// let names = [];
// names[0] = "Папір офісний А4, 80 г/м2, 500 л";
// names[1] = "Біндери для паперу 51 мм";
// names[2] = "Ручка кулькова синя";
//
// // масив із цінами продуктів
// let prices = [];
// prices[0] = 280.25;
// prices[1] = 56;
// prices[2] = 12.50;
//
// // масив з кількістю продуктів, що купуються
// let products = [];

// цикл для отримання кількості продуктів, що купуються
// for (let index = 0; index < names.length; index++) {
//     const name = names[index];
//     const price = prices[index];
//
//     products[index] = +prompt(`Вкажіть кількість продуктів '${name}', ціна ${price}`, 0);
// }
//
// // цикл для розрахунку загальної ціни куплених продуктів
// let totalPrice = 0;
// for (let index = 0; index < products.length; index++) {
//     totalPrice += prices[index] * products[index];
// }
//
// alert(`Сума Вашого замовлення ${totalPrice}.`);
//
// let isFreeShipping = totalPrice > 1000;
// if (isFreeShipping) // іноді в умові використовується лише одна змінна
// {
//     alert("Доставка буде безкоштовною.");
// }


console.log('======================');
console.log('======================');
console.log('======================');


let shoppingCard = {
    cart: [],

    add(product, count) {
        this.cart.push({product: product, count: count})


    },

    getTotalPrice() {

        let sum = 0;
        this.cart.forEach(item => sum += item.product.price * item.count);
        return sum;
    },
};



let dataBase = {

    products: [
        {name: "Папір офісний А4, 80 г/м2, 500 л", price: 280.25},
        {name: "Біндери для паперу 51 мм", price: 56},
        {name: "Ручка кулькова синя", price: 12.50}
    ],
    add: function (name, price) {
        this.products.push({name: name, price: price})
    },
    // remove: function (name) {
    //     let filterProduct = this.products.filter(x => x.name === name);
    //     let index = products.indexOf(filterProduct);
    //     return this.products.splice(index, 1);
    // }
    remove: function (name) {
        let index = this.products.findIndex(x => x.name === name);
        if (index !== -1) {
            return this.products.splice(index, 1);
        }
        return [];
    }
}




let uiController = {
    
    display : function (message) {
        console.log(message);
    },
    
    promptNumber : function (message) {
        return +prompt(message);
    },

    promptByList : function (list,messagTempateFn) {

        return list.map(element => this.promptNumber(messagTempateFn(element)));
        
    },

    displayList : function (list,messageTemplateFn) {

        list.forEach(x=>this.display(messageTemplateFn(x)))
    }
};

uiController.displayList(dataBase.products, x => `${x.name} = ${x.price} grn`);
let productCount = uiController.promptByList(dataBase.products, x => `${x.name} = ${x.price} grn`);

dataBase.products.forEach((p,index)=>{
    shoppingCard.add(p, productCount[index]);
})
let total = shoppingCard.getTotalPrice();
console.log(total);