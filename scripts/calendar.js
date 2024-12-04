import { 
    format,
    addMonths,
    subMonths,
    getDaysInMonth,
    startOfMonth,
    getDay,
    isToday,
    isSameDay,
    parseISO
} from 'date-fns';
import { es } from 'date-fns/locale';

export class Calendar {
    constructor(container, onDateSelect) {
    this.container = container;
    this.onDateSelect = onDateSelect;
    this.currentDate = new Date();
    this.selectedDate = null;
    this.init();
    }

    init() {
    this.render();
    this.attachEventListeners();
    }

    render() {
    const monthYear = format(this.currentDate, 'MMMM yyyy', { locale: es });
    const daysInMonth = getDaysInMonth(this.currentDate);
    const firstDayOfMonth = getDay(startOfMonth(this.currentDate));

    this.container.innerHTML = `
        <div class="calendar">
        <div class="calendar-header">
            <button class="month-nav prev">&lt;</button>
            <h3>${monthYear}</h3>
            <button class="month-nav next">&gt;</button>
        </div>
        <div class="weekdays">
            <span>D</span>
            <span>L</span>
            <span>M</span>
            <span>M</span>
            <span>J</span>
            <span>V</span>
            <span>S</span>
        </div>
        <div class="days">
            ${this.generateDays(daysInMonth, firstDayOfMonth)}
        </div>
        </div>
    `;
    }

    generateDays(daysInMonth, firstDayOfMonth) {
    let days = '';
    
      // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        days += '<button disabled></button>';
    }

      // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
        const isSelected = this.selectedDate && isSameDay(date, this.selectedDate);
        const isTodayDate = isToday(date);
        
        days += `
        <button 
            class="${isSelected ? 'active' : ''} ${isTodayDate ? 'today' : ''}"
            data-date="${format(date, 'yyyy-MM-dd')}"
        >
            ${day}
        </button>
        `;
    }

    return days;
    }

    attachEventListeners() {
      // Month navigation
    this.container.querySelector('.prev').addEventListener('click', () => {
        this.currentDate = subMonths(this.currentDate, 1);
        this.render();
});

this.container.querySelector('.next').addEventListener('click', () => {
        this.currentDate = addMonths(this.currentDate, 1);
        this.render();
});

      // Day selection
this.container.querySelector('.days').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && !e.target.disabled) {
            const dateStr = e.target.dataset.date;
        if (dateStr) {
            this.selectedDate = parseISO(dateStr);
            this.onDateSelect(this.selectedDate);
            this.render();
        }
        }
    });
    }
}