import { Calendar } from './calendar.js';
import { TimeSlots } from './timeSlots.js';
import '../styles//paso-dos-tarjeta.css';

document.addEventListener('DOMContentLoaded', () => {
const calendarContainer = document.querySelector('.calendar-container');
const timeSlotsContainer = document.querySelector('.time-slots');

const timeSlots = new TimeSlots(timeSlotsContainer);

new Calendar(calendarContainer, (selectedDate) => {
    timeSlots.updateSlots(selectedDate);
});
});