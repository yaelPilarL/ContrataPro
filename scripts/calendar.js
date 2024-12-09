const yearSelect = document.getElementById('year-select');
const monthSelect = document.getElementById('month-select');
const daysContainer = document.querySelector('.days');
const selectedDateDisplay = document.getElementById('selected-date');
const slotsContainer = document.querySelector('.slots');

// Variable para almacenar el horario previamente seleccionado
let previouslySelectedTimeSlot = null;

// Poblar los años dinámicamente (solo el año actual y los próximos 2 años)
const currentYear = new Date().getFullYear();
for (let i = currentYear; i <= currentYear + 2; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    if (i === currentYear) option.selected = true;
    yearSelect.appendChild(option);
}

// Función para generar días del mes
function generateCalendar() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    daysContainer.innerHTML = ''; // Limpiar días previos

    // Rellenar días vacíos al inicio
    for (let i = 0; i < firstDayOfWeek; i++) {
        daysContainer.appendChild(document.createElement('span'));
    }

    // Rellenar días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const button = document.createElement('button');
        button.textContent = day;

        // Agregar un evento de clic para cada botón de día
        button.addEventListener('click', () => {
            const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;
            const formattedDate = `${day < 10 ? '0' + day : day}/${selectedMonth}/${year}`;
            
            // Mostrar el contenedor de slots y actualizar la fecha
            slotsContainer.style.display = 'block'; // Mostrar los slots
            selectedDateDisplay.textContent = formattedDate; // Actualizar la fecha en el encabezado
        });

        daysContainer.appendChild(button);
    }

    // Si no se ha seleccionado ningún día, mostrar DD/MM/AAAA
    if (selectedDateDisplay.textContent === '') {
        selectedDateDisplay.textContent = 'DD/MM/AAAA';
    }
}

// Eventos para actualizar el calendario
yearSelect.addEventListener('change', generateCalendar);
monthSelect.addEventListener('change', generateCalendar);

// Generar calendario inicial
generateCalendar();

// Evento para cambiar color de fondo cuando se presiona el botón RESERVAR
const reserveButtons = document.querySelectorAll('.reserve-btn');

reserveButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Revertir el color de fondo del contenedor previamente seleccionado
        if (previouslySelectedTimeSlot) {
            previouslySelectedTimeSlot.style.backgroundColor = ''; // Restaurar el color original
        }

        // Cambiar el color de fondo del contenedor .time-slot
        const timeSlot = event.target.closest('.time-slot');
        timeSlot.style.backgroundColor = 'rgba(136, 186, 214, 0.5)'; // Cambia el color 


        // Actualizar la variable de seguimiento para el nuevo horario seleccionado
        previouslySelectedTimeSlot = timeSlot;
    });
});
