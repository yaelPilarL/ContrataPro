//Registro e inicio de sesion 
document.getElementById ("btn_registrase").addEventListener ("click", registro)
document.getElementById ("btn_iniciar_sesion").addEventListener ("click", iniciar)
window.addEventListener("resize", anchoPage);
//variables utilizadas
var contenedor_login_registro = document.querySelector(".contenedor_login_registro")
var formulario_login = document.querySelector(".formulario_login")
var formulario_registro = document.querySelector(".formulario_registro")
var caja_registro = document.querySelector(".caja_trasera_registro")
var caja_login = document.querySelector(".caja_trasera_login")

function anchoPage(){
    if (window.innerWidth > 850){
        caja_registro.style.display = "block";
        caja_login.style.display = "block";
    }else{
        caja_registro.style.display = "block";
        caja_registro.style.opacity = "1";
        caja_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_registro.style.display = "none";   
    }
}
anchoPage();

function iniciar(){
    if(window.innerWidth > 850){
    formulario_login.style.display= "block"; 
    contenedor_login_registro.style.left= "10px"; 
    formulario_registro.style.display= "none";
    caja_registro.style.opacity= "1"; 
    caja_login.style.opacity= "0"; 
    }else{
    formulario_login.style.display= "block"; 
    contenedor_login_registro.style.left= "0px"; 
    formulario_registro.style.display= "none";
    caja_registro.style.display= "block"; 
    caja_login.style.display= "none"; 
    }
}

function registro(){
    if(window.innerWidth > 850){
    formulario_registro.style.display= "block"; 
    contenedor_login_registro.style.left= "410px"; 
    formulario_login.style.display= "none";
    caja_registro.style.opacity= "0"; 
    caja_login.style.opacity= "1"; 
    }else{
    formulario_registro.style.display= "block"; 
    contenedor_login_registro.style.left= "0px"; 
    formulario_login.style.display= "none";
    caja_registro.style.display= "none"; 
    caja_login.style.display= "block"
    caja_login.style.opacity= "1"; 

}
}
