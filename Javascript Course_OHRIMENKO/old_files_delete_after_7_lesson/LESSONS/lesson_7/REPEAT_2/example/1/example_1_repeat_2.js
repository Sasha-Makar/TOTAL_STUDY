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


console.log("---------------======================refactoring================---------------");

//
// let shoppingCart = {
//     card: [],
//
//     add(product, count) {
//         this.card.push({product: product, count: count});
//     },
//
//     getTotalPrice() {
//         let sum = 0;
//         this.card.forEach(item => sum += item.product.price * item.product.count);
//         return sum;
//     },
// }
//
// let shopDatabase = {
//
//     products: [
//         {name: "Папір офісний А4, 80 г/м2, 500 л", price: 280.25},
//         {name: "Біндери для паперу 51 мм", price: 56},
//         {name: "Ручка кулькова синя", price: 12.50}
//     ],
//
//     add: function (name, price) {
//         this.products.push({name: name, price: price});
//     },
//
//     remove: function (name) {
//         let product = this.products.filter(item => item.name === name)[0];
//         let index = this.products.indexOf(product);
//         this.products.splice(index, 1);
//     }
//
//
// }
//
//
// let uiController = {
//     display(message) {
//         console.log(message);
//     },
//
//     promptNumber (message){
//         return +prompt(message);
//     },
//
//     promptByList(list, messageTemplateFn) {
//        return  list.map(element=> this.promptNumber(messageTemplateFn(element)));
// },
//
//     displayList(list, messageTemplateFn) {
//          list.forEach(x => this.display(messageTemplateFn(x)));
//     }
// }
//
// uiController.displayList(shopDatabase.products, x => `${x.name}=${x.price} gryven`);
// console.log('====================');
// let productCount = uiController.promptByList(shopDatabase.products, x => `${x.name}=${x.price} gryven`);
//
// shopDatabase.products.forEach((p,index)=>{
//     shoppingCart.add(p, productCount[index]);
// });
//
// let total = shoppingCart.getTotalPrice();
// console.log(total);

let shoppingCart = {
    card: [],

    add(product, count) {
        if (isNaN(count) || count <= 0) {
            console.log(`Невірна кількість для ${product.name}`);
            return;
        }
        this.card.push({ product: product, count: count });
    },

    getTotalPrice() {
        let sum = 0;
        this.card.forEach(item => sum += item.product.price * item.count);
        return sum;
    },
}

let shopDatabase = {
    products: [
        { name: "Папір офісний А4, 80 г/м2, 500 л", price: 280.25 },
        { name: "Біндери для паперу 51 мм", price: 56 },
        { name: "Ручка кулькова синя", price: 12.50 }
    ],

    add: function (name, price) {
        this.products.push({ name: name, price: price });
    },

    remove: function (name) {
        let product = this.products.filter(item => item.name === name)[0];
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }
}

let uiController = {
    display(message) {
        console.log(message);
    },

    promptNumber(message) {
        let input = prompt(message);
        let number = parseFloat(input);  // Перетворюємо введене значення в число

        // Перевіряємо чи це дійсно число і більше за нуль
        if (isNaN(number) || number <= 0) {
            alert("Будь ласка, введіть дійсне число більше 0.");
            return this.promptNumber(message);  // Якщо введено некоректне значення, запитуємо ще раз
        }
        return number;
    },

    promptByList(list, messageTemplateFn) {
        return list.map(element => this.promptNumber(messageTemplateFn(element)));
    },

    displayList(list, messageTemplateFn) {
        list.forEach(x => this.display(messageTemplateFn(x)));
    }
}

// Вивести список товарів
uiController.displayList(shopDatabase.products, x => `${x.name} = ${x.price} грн`);

// Отримати кількість товарів для кожного продукту
console.log('====================');
let productCount = uiController.promptByList(shopDatabase.products, x => `${x.name} = ${x.price} грн`);

// Додати продукти до кошика
shopDatabase.products.forEach((p, index) => {
    shoppingCart.add(p, productCount[index]);
});

// Обчислити та вивести загальну суму
let total = shoppingCart.getTotalPrice();
console.log('Total:', total);
