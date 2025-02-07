let estimatesArray = [];
let counter = 10;
let enterValue = confirm('нажміть Enter');

while (!enterValue) {
    console.log('error');
    enterValue = confirm('нажміть Enter');
}

    for (let i = 0; i < counter; i++) {

        let randomEstimates = Math.floor(Math.random() * 100) + 1;
        estimatesArray.push(randomEstimates);
    }
console.log(estimatesArray);


    function average(array) {
        let sum = 0;
        for (const num of array) {
            sum += num;
        }
        let average = sum / array.length;
        return average
    }

let averageNum = average(estimatesArray);
console.log(averageNum);


let minRage = Math.min(...estimatesArray);
let maxNum = Math.max(...estimatesArray);

console.log(minRage);
console.log(maxNum);


alert(`середній бал - ${averageNum} \nнайвищий - ${maxNum} \nнайнижча оцінка - ${minRage}`);







