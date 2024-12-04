export class TimeSlots {
    constructor(container) {
    this.container = container;
    }

    updateSlots(date) {
    const formattedDate = new Intl.DateTimeFormat('es', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    }).format(date);

    this.container.querySelector('.slot-header span:first-child').textContent = formattedDate;
    }
}