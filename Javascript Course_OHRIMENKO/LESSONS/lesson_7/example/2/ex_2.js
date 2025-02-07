


//instead of branching switch

///замість розгалуження switch



let options = {
    circle : function () {
        console.log('circle');
    },
    rectangle : function () {
        console.log('rectangle');
    },
    triangle : function () {
        console.log('triangle');
    }
};

let option = prompt('select circle, rectangle or triangle');

options[option]();
