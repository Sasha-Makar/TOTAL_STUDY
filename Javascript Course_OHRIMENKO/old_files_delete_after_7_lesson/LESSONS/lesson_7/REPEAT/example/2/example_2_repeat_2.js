let option = prompt('select circle, rectangle or triangle or xls or test');


let options = {
    circle: function () {
        console.log('circle');
    },

    rectangle: function () {
        console.log('rectangle');
    },

    triangle: function () {
        console.log('triangle');
    },

    xls: function () {
        console.log('xls');
    },

    test : function () {
        console.log('test fuckoff!!!');
    }
}

options[option]();

