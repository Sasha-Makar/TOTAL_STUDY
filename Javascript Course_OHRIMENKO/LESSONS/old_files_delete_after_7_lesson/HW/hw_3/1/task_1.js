

document.querySelector('#btn').onclick = function () {

    let output = document.querySelector('#output');
    let integer = parseFloat(prompt('your integer'));
    if (!integer ){

        alert("Please enter a valid number");
    } else {
        if(!(integer%2)){
            output.innerHTML = `${integer}  - це парне число`;
            alert(integer + ' парне число');
        }else {
            output.innerHTML = `${integer}  - це НЕпарне число`;
            alert(integer + ' НЕпарне число');
        }
    }

}