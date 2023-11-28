// import { Component, OnInit } from '@angular/core';
// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

 
// @Component({
//   selector: 'app-calendario',
 
//  templateUrl: './calendario.component.html',
//   styleUrls: ['./calendario.component.scss']
// })
// export class CalendarioComponent implements OnInit {
  
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component , AfterViewInit} from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ElementRef, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { mostrarcita } from 'src/app/services/Interface/Interfaces';
import { MatDialog } from '@angular/material/dialog';

import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',

  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements AfterViewInit{
  constructor(private httpService: HttpService, private dialog: MatDialog) {}
  Mcita: mostrarcita[] = [];

  ngAfterViewInit( ): void {
  


















  
    const calendarEl = document.getElementById('calendar');
     if (!calendarEl) {
      console.error("Elemento '#calendar' no encontrado.");
     return;
    }
   const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    validRange: {
      start: '2023-01-01',
      end: '2023-12-31',
     
    },

    showNonCurrentDates: true,
  
    locale: esLocale, // Establece el idioma en español
  
  });

  calendar.render();
 }

  
    
  //       {
  //         plugins: [dayGridPlugin],
  //         initialView: 'dayGridMonth',
  //         events: [
            
  //             {
  //               title: 'Evento 2',
  //               start: '2023-10-15',
  //               end: '2023-10-16'
  //             }
  //           ]
  // }]});
  //         calendar.render();




  //   }





}