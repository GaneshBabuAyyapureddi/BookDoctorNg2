import {
  Component, OnInit, ViewChild, ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
// import {CalendarComponent} from '../../app/calendar/calendar.component';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { Subject } from 'rxjs/Subject';
/* import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; */
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
export const Calendar: any[] = [
  CalendarComponent
];
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { AppService } from '../app.service';
declare var $;
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendarevent',
  templateUrl: './calendarevent.component.html',
  styleUrls: ['./calendarevent.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendareventComponent {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view = 'month';
  appoinmentData: any;
  datas: any = [];
  // events: CalendarEvent[] = [];

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 6),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: new Date(),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }
  ];

  activeDayIsOpen = true;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.data.subscribe(
      data => {
        //alert(data)
        console.log(data)
        this.appoinmentData = data;
        if (data !== null) {
          if (!localStorage.getItem('appoinments')) {
            this.datas.push(data);
            localStorage.setItem('appoinments', JSON.stringify(this.datas));
            this.setEvents(data);
          }
          else {
            let app = JSON.parse(localStorage.getItem('appoinments'));
            let isAppointed = false;

            app.forEach((element) => {
              //  console.log(new Date(element.date).getTime())
              //  console.log(new Date(data.date).getTime())
              //  console.log(new Date(element.time))
              //  console.log(new Date(data.time))
              if ((new Date(element.date).getTime() === new Date(data.date).getTime()) && (element.time === data.time))
              // if((new Date(element.date).getTime()===new Date(data.date).getTime()))
              {
                isAppointed = true;
              }
            });
            if (isAppointed) {
              alert('Appoinment alread booked')
            } else {
              app.push(data);
              localStorage.setItem('appoinments', JSON.stringify(app));
              this.setEvents(data);
            }

          }
        }
        else {
          let app = JSON.parse(localStorage.getItem('appoinments'));
          if (app) {
            app.forEach((element) => {
              this.setEvents(element);
            })
          }

        }


      }
    );
  }

  setEvents(data) {

    let events = {
      start: startOfDay((new Date(data.date))),
      end: endOfDay(new Date(data.date)),
      title: data.selectedValueDoctor + ',' + data.selectedValueSpecial + ' -- ' +' time :' +
        data.time,
      color: colors.red,
      draggable: false
    }
    this.events.push(events);
    this.refresh.next();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    /* this.modal.open(this.modalContent, { size: 'lg' }); */
  }

  // addEvent(form) {
  //   console.log(form);
  //   const date = form.eventDate.split('-');
  //   this.events.push({
  //     title: form.eventName,
  //     start: startOfDay(new Date(date[2], date[1], date[0])),
  //     end: endOfDay(new Date(date[2], date[1] - 1, date[0])),
  //     color: colors.red,
  //     draggable: false
  //   });
  //   this.refresh.next();
  //   $('#modal').modal('hide');
  // }

}
