// alert(22);

//    ARRAYS


// let cities = ['London', 'Paris', 'Berlin', 'Rome'];
//
// console.log(cities);
// console.log(cities[1]);

let cities = ['Kyiv', 'Paris', 'London'];
console.log(cities);
// console.log(cities.length);
// console.log(cities[0]);
// cities[1]='AAAAA';
// console.log(cities);
// cities[10] = 'OOOOOOO';
// console.log(cities);
// console.log(cities.length);

console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);

console.log('=======');

for (let index = 0; index < cities.length; index++) {
    // console.log(cities[index]);
    const city = cities[index];
    console.log(city);
}

console.log('=======');

for (const prop in cities) {
    console.log(cities[prop] + ' - city name');
}


console.log('=========');


for (const city of cities) {
    console.log(city);
}


console.log('============');


let months = ['May', 'July', 'December', 'October', 'June'];
console.log(months);
months.push('AAA');
console.log(months);
let softDelete = months.splice(2, 1, 'OKTEN');
console.log(softDelete);
console.log(months);

// push pop
// shift unshift
// findIndex indexOff
// map


let nums = [1, 2, 3];
let map = nums.map((x)=>x*2);
console.log(nums);
console.log(map);