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
//
// // цикл для отримання кількості продуктів, що купуються
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

console.log('----------------------');

// let shopCart = {
//     cart :[],
//
//     add(product,count) {
//         this.cart.push({product:product, count: count})
//
//     },
//
//     getTotalPrice() {
//         let sum = 0;
//         this.cart.forEach(item => sum += item.product.price * item.count);
//         return sum;
//     }
// }
//
// let shopDatabase = {
//     products : [
//         {name : "Папір офісний А4, 80 г/м2, 500 л", price : 280.25},
//         {name : "Біндери для паперу 51 мм", price : 56},
//         {name : "Ручка кулькова синя", price : 12.50}
//                ],
//         add : function (name,price) {
//             this.products.push({name: name, price: price});
//         },
//
//         remove : function (name) {
//             let product = this.products.filter(x => x.name === name)[0];
//             let index = this.indexOf(product);
//             this.products.splice(index, 1);
//         }
// };
//
// let uiController = {
//     display : function (message) {
//         console.log(message);
//     },
//    displayList:function (list, messageTemplateFn) {
//        list.forEach(x => this.display(messageTemplateFn(x)));
//    }
// }
//
// uiController.displayList(shopDatabase.products, x => `${x.name} = ${x.price}`);

console.log('================================REPEAT============================');
// ------------------------------REPEAT---------------------------//


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
//
// // цикл для отримання кількості продуктів, що купуються
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


// //масив з іменами продуктів
// let names = [];
// names[0] = 'Ruchka';
// names[1] = 'Stakan pid ruchku';
// names[2] = 'Papir';
// // масив із цінами продуктів
// let prices = [];
// prices[0] = 10;
// prices[1] = 17;
// prices[2] = 100;
//
// // масив з кількістю продуктів, що купуються
//
// let products = [];
//
// // цикл для отримання кількості продуктів, що купуються
//
// for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const price = prices[i];
//
//     products[i]= +prompt('vvedit kilkist produktiv ' + name + ' ,' + ' cina- ' + price,0 )
// }
//
// // цикл для розрахунку загальної ціни куплених продуктів
//
// let totalPrice = 0;
// for (let i = 0; i < products.length; i++) {
//     totalPrice += prices[i] * products[i];
// }
// alert(`suma vashjgo zamovlennia ${totalPrice}`);
//
//
// let freeShipping = totalPrice >1000;
// if (freeShipping) alert('dpstavka bezplatna!!');

let shoppingCart = {
    cart: [],

    add(product, count) {
        this.cart.push({product: product, count: count})
    },

    getTotalPrice() {
        let sum = 0;
        this.cart.forEach(item => sum += item.product.price * item.count);
        return sum;
    }
};


let shopDatabase = {
    products: [
        {name: "Папір офісний А4, 80 г/м2, 500 л", price: 280.25},
        {name: "Біндери для паперу 51 мм", price: 56},
        {name: "Ручка кулькова синя", price: 12.50}
    ],
    add: function (name, price) {
        this.products.push({name: name, price: price});
    },
    remove: function (name) {
        let product = this.products.filter(x => x.name === name)[0];
        let index = this.indexOf(product);
        this.products.splice(index, 1);
    }
};


let uiController = {

    display: function (message) {
        console.log(message);
    },

    promptNumber: function (message) {
        return +prompt(message);
    },
    
    promptByList : function (list,messageTemplateFn) {
       return  list.map(element => this.promptNumber(messageTemplateFn(element)));
        
    },

    displayList: function (list, messageTemplateFn) {
        list.forEach(x => this.display(messageTemplateFn(x)));
    }

};

//app

uiController.displayList(shopDatabase.products, x => `${x.name} - ${x.price} GRN`);

let productCount = uiController.promptByList(shopDatabase.products, x => `${x.name} - ${x.price} GRN`);

shopDatabase.products.forEach((p,index)=>{
    shoppingCart.add(p, productCount[index]);
})
let total = shoppingCart.getTotalPrice();
console.log(total);
alert(total)


