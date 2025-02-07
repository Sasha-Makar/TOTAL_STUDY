

let options = {
    
    circle: function () {
        console.log('circle');
    },
    triangle: function () {
        console.log('triangle');
    },
    rectangle: function () {
        console.log('rectangle');
    }
}

let option = prompt('select circle,triangle or rectangle');

options[option]();
