document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        events: [
            {
                title: 'Evento 1',
                start: '2024-08-01'
            },
            {
                title: 'Evento 2',
                start: '2024-08-07',
                end: '2024-08-10'
            }
        ]
    });
    calendar.render();
});
