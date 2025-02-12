//CIRCLE
let getCircleArea = radius => Math.PI * Math.pow(radius, 2);
let getCirclePerimeter = radius => 2 * Math.PI * radius;


//RECTANGLE
let getRectangleArea = (triangleLength, triangleWidth) => triangleLength * triangleWidth;
let getRectanglePerimeter = (triangleLength, triangleWidth) => 2 * (triangleLength * triangleWidth);

//TRIANGLE
let getTriangleArea = ( a, b, c) => {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
let getTrianglePerimeter = (a, b, c) => a + b + c;



document.querySelector('#btnFig').onclick = () =>{
    let figure = prompt('ENTER YOUR FIGURE (коло, прямокутник,трикутник)');
    figure = figure.toLowerCase().trim();

    if ((figure === 'коло')||(figure==='трикутник')||(figure === 'прямокутник')){
        alert('Ви ввели фігуру: ' + figure + '\nтепер переходьте до обчислення!');
        calculateFigure(figure);
    }else {
        alert('ERROR!!! Введіть правильну фігуру!')
    }
}


function calculateFigure(figure) {
    let txt = '';
    if (figure === 'коло') {
            let radius = +prompt('enter radius');
            let circleArea = getCircleArea(radius);
            let circlePerimeter = getCirclePerimeter(radius);
            txt = 'площа кола - ' + circleArea + ' та периметр цьога кола - ' + circlePerimeter;

    } else if (figure === 'прямокутник') {

            let rectangleLength = +prompt('enter довжину');
            let rectangleWidth = +prompt('введіть ширину');
            let rectangleArea = getRectangleArea(rectangleLength, rectangleWidth);
            let rectanglePerimeter = getRectanglePerimeter(rectangleLength,rectangleWidth);
            txt = 'площа прямокутника - ' + rectangleArea + ' та периметр цього прямокутника - ' + rectanglePerimeter;

    } else if(figure === 'трикутник') {

            let a = +prompt('довжина 1 сторони трикутника');
            let b = +prompt('довжина 2 сторони трикутника');
            let c = +prompt('довжина 3 сторони трикутника');
            let triangleArea = getTriangleArea( a, b, c);
            let trianglePerimeter = getTrianglePerimeter(a, b, c);
            txt = 'площа трикутника - ' + triangleArea + ' та периметр цього трикутника - ' + trianglePerimeter;
        }
        showResult(txt);

}


function showResult (txt){
    let output = document.querySelector('#output');
    output.innerHTML = txt;
}