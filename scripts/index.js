<<<<<<< HEAD
// CARRUSEL
let indice = 0;

function mostrarImagen() {
    const imagenes = document.querySelectorAll('.carruseluser .slider-wraper .slider div');
    imagenes.forEach((div, i) => {
        div.style.display = 'none';
    });
    imagenes[indice].style.display = 'block';
}

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.carruseluser .slider-wraper .slider div');
    indice += direccion;
    
    if (indice >= imagenes.length) {
        indice = 0;
    } else if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarImagen();
}

// Inicializa el carrusel mostrando la primera imagen
mostrarImagen();

//BOTÓN SOY PROFESIONAL
function mostrar(){
    var container = document.getElementById("carruselprof");

    if(container.style.display == "block"){
        container.style.display = "none";
    }
    else{
        container.style.display = "block";
    }
}

let ind = 0;

function mostrarImg() {
    const imagenes = document.querySelectorAll('.carruselprof .slider-wraper .sliderprof div');
    imagenes.forEach((div, i) => {
        div.style.display = 'none';
    });
    imagenes[ind].style.display = 'block';
}

function cambiarImg(direccion) {
    const imagenes = document.querySelectorAll('.carruseluser .slider-wraper .slider div');
    ind += direccion;
    
    if (ind >= imagenes.length) {
        indice = 0;
    } else if (indice < 0) {
        ind = imagenes.length - 1;
    }

    mostrarImagen();
}


=======
//inicio y registro 
document.getElementById ("btn_registrase").addEventListener ("click", registro)
document.getElementById ("btn_iniciar_sesion").addEventListener ("click", iniciar)
//variables utilizadas
var contenedor_login_registro = document.querySelector(".contenedor_login_registro")
var formulario_login = document.querySelector(".formulario_login")
var formulario_registro = document.querySelector(".formulario_registro")
var caja_registro = document.querySelector(".caja_trasera_registro")
var caja_login = document.querySelector(".caja_trasera_login")

function iniciar(){
    formulario_registro.style.display= "none"; 
    contenedor_login_registro.style.left= "10px"; 
    formulario_login.style.display= "block";
    caja_registro.style.opacity= "1"; 
    caja_login.style.opacity= "0"; 
}

function registro(){
    formulario_registro.style.display= "block"; 
    contenedor_login_registro.style.left= "410px"; 
    formulario_login.style.display= "none";
    caja_registro.style.opacity= "0"; 
    caja_login.style.opacity= "1"; 
}
>>>>>>> 8db5c83a05302af61bda4bc399b9ec9c4fc345b1
