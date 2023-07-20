import { Component , OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
//import dayGridPlugin from '@fullcalendar/daygrid';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  events!: any[];
  options: any;
  ngOnInit() {
    let draggableEl = document.getElementById('external-events');
    var self = this;

    new Draggable(draggableEl!, {
      itemSelector: '.fc-event',
      eventData: function (eventEl: any) {
        console.log(eventEl);

        return {
          title: eventEl.innerText
        };
      }
    });

    this.events = [
      { title: 'Sua 1pm = 5pm', start: '2023-07-20T10:00:00', end: '2023-07-20T17:30:00', color: '#A7BED3' },
      { title: 'Laura', start: '2023-07-20T17:30:00', end: '2023-07-20T23:30:00', color: '#957DAD' },
      { title: 'Byeol', start: '2023-07-21T10:00:00', end: '2023-07-21T17:30:00', color: '#fb6f92' },
      { title: 'Sua', start: '2023-07-21T12:30:00', end: '2023-07-21T22:30:00', color: '#A7BED3' },
      { title: 'Laura', start: '2023-07-21T20:30:00', end: '2023-07-21T23:30:00', color: '#957DAD' }
    ]

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      editable: true,
      displayEventTime: false,
      slotMinTime: "10:00:00",
      slotMaxTime: "24:00:00"
    }
  }
  
  // calendarOptions: CalendarOptions = {
  //   plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  //   initialView: 'timeGridWeek',
  //   editable: true,
  //   displayEventTime: false,
  //   slotMinTime: "10:00:00",
  //   slotMaxTime: "24:00:00"
  //   // businessHours: {
  //   //   // days of week. an array of zero-based day of week integers (0=Sunday)
  //   //   //daysOfWeek: [ 1, 2, 3, 4 ], // Monday - Thursday
  //   //   startTime: '10:00', // a start time (10am in this example)
  //   //   endTime: '24:00', // an end time (6pm in this example)
  //   // },
    
  // };
}
