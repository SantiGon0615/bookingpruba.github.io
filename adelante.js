document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var eventListEl = document.getElementById('eventList');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        events: []
    });
    calendar.render();

    var eventForm = document.getElementById('eventForm');
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var title = document.getElementById('title').value;
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var pago = document.getElementById('pago').value;
        var faltaPago = document.getElementById('faltaPago').value;

        if (title && start && nombre && apellido && pago && faltaPago) {
            var newEvent = {
                title: title,
                start: start,
                end: end ? end : null,
                extendedProps: {
                    nombre: nombre,
                    apellido: apellido,
                    pago: pago,
                    faltaPago: faltaPago
                }
            };

            calendar.addEvent(newEvent);
            calendar.refetchEvents();

            // Añadir el evento a la lista de eventos
            var eventItem = document.createElement('li');
            eventItem.textContent = `Evento: ${title}, Huésped: ${nombre} ${apellido}, Pago: ${pago}, Falta Pago: ${faltaPago}`;
            eventListEl.appendChild(eventItem);

            // Limpiar el formulario
            eventForm.reset();
        } else {
            alert('Por favor, completa todos los campos requeridos.');
        }
    });
});
