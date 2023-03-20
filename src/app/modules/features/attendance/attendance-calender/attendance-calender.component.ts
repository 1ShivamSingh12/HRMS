import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';


@Component({
  selector: 'app-attendance-calender',
  templateUrl: './attendance-calender.component.html',
  styleUrls: ['./attendance-calender.component.scss']
})
export class AttendanceCalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };



}
