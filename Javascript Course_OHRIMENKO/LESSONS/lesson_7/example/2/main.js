


let options = {
    circle : function () {
        console.log('circle777');
    },

    rectangle : function () {
        console.log('rectangle778');
    },

    triangle : function () {
        console.log('triangle779');
    }
}

let option = prompt('select circle,rectangle or triangle');

options[option]();