//constante con el id btn-change-color
const btnChangeColor = document.getElementById('btn-change-color');

//funcion randomColor que genera un color aleatorio
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//cuando el usuario haga click en el boton cambiar color
btnChangeColor.addEventListener('click', function () {
    //cambiar el color del body
    document.body.style.backgroundColor = randomColor();
});