document.querySelectorAll('.payment-options input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.querySelectorAll('.payment-options input[type="checkbox"]').forEach((cb) => {
                if (cb !== event.target) {
                    cb.checked = false; // Desmarcar el otro checkbox
                }
            });
        }
    });
});