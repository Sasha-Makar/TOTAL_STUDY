let cities = ['Kyiev', 'London', 'Lviv'];
console.log(cities);

console.log(cities[1]);
console.log(cities.length);

cities[10]='rivne';
console.log(cities);
console.log(cities.length);


console.log('=========');


for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

console.log('=========');

for (const prop in cities) {
    console.log(cities[prop]);
}

console.log('========');

for (const city of cities) {
    console.log(city);
}

console.log('============');
console.log('============');
console.log('============');


for (const city of cities) {
    if (city !== undefined) {
        console.log(city);
    }
}

console.log('============');
console.log('============');
console.log('============');

