const yearSelect = document.getElementById('year-select');
const monthSelect = document.getElementById('month-select');
const daysContainer = document.querySelector('.days');

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
        daysContainer.appendChild(button);
    }
}

// Eventos para actualizar el calendario
yearSelect.addEventListener('change', generateCalendar);
monthSelect.addEventListener('change', generateCalendar);

// Generar calendario inicial
generateCalendar();
