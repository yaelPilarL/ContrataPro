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


