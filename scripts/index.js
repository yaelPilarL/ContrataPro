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