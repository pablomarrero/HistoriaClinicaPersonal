$(document).ready(function() {

    // page is now ready, initialize the calendar...

    
    $('#calendario').fullCalendar({    
        events: [
            {
                title: 'Vacuna',
                start: '2018-02-08',
                url: 'editar-datos-evento.html'
            },
            {
                title: 'Fonoaudiologo',
                start: '2018-02-02',
                url: 'editar-datos-evento.html'
            },
            {
                title: 'Control',
                start: '2018-02-18',
                url: 'editar-datos-evento.html'
            }
            // other events here
        ],
        eventClick: function(event) {
            if (event.url) {
                window.open(event.url);
                return false;
            }
        },  
        customButtons: {
            BtnBuscar: {
                text: 'search',
                click: function() {
                    alert('Apretaste Buscar');
                }
            },
            BtnAdd: {
                text: 'add',
                click: function() {
                    alert('Apretaste Add');
                }
            }
        },
        header: {
            left: 'month,agendaWeek,agendaDay,list,prevYear,title,nextYear',
            center: '' ,
            right: 'BtnBuscar, BtnAdd'
        }
    })
/*

    //mover month, week y day
    $('#calendario .fc-left').find(':first-child').remove("div");
    $('#calendario .fc-left').append(
                '<div class="fc-item-menu">'+
                '    <button type="button" class="fc-month-button fc-button fc-state-default fc-state-active">month</button>'+
                '    <button type="button" class="fc-agendaWeek-button fc-button fc-state-default">week</button>'+
                '    <button type="button" class="fc-agendaDay-button fc-button fc-state-default">day</button>'+
                '</div>'+
                '<div class="fc-titulo">'+
                '    <button type="button" class="fc-prevYear-button fc-button fc-state-default" aria-label="prevYear"><span class="fc-icon fc-icon-left-double-arrow"></span></button>'+
                '    <h2>February 2018</h2>'+
                '    <button type="button" class="fc-nextYear-button fc-button fc-state-default" aria-label="nextYear"><span class="fc-icon fc-icon-right-double-arrow"></span></button>'+
                '</div>'
    );
*/
});