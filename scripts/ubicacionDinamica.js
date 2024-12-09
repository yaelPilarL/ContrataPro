const addressInput = document.getElementById('address-input');
    const addressDisplays = document.querySelectorAll('.address-display');

    addressInput.addEventListener('input', () => {
        // Obtener el valor actual del campo de entrada
        const addressValue = addressInput.value;

        // Actualizar el texto de todos los elementos con la clase 'address-display'
        addressDisplays.forEach(display => {
            display.textContent = addressValue || "Dirección del domicilio colocado";
        });
    });