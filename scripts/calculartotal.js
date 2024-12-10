function multiplicar() {
    // Obtener el valor del campo de entrada
    var numero = document.getElementById('numero').value;
  
    // Comprobar si el valor es un número
    if (!isNaN(numero) && numero !== '') {
      // Multiplicar el número por 10
      var resultado = numero * 10;
  
      // Mostrar el resultado en el div
      document.getElementById('resultado').innerText = "Resultado: " + resultado;
    } else {
      // Si no es un número válido, mostrar un mensaje de error
      document.getElementById('resultado').innerText = "Por favor, ingresa un número válido.";
    }
  }
  