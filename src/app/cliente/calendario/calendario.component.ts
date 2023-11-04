import { Component, AfterViewInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpService } from 'src/app/services/http/http.service';
import { mostrarcita } from 'src/app/services/Interface/Interfaces';
import timeGridPlugin from '@fullcalendar/timegrid';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements AfterViewInit {

  constructor(private httpService: HttpService) {}

  Mcita: mostrarcita[] = [];

  ngAfterViewInit(): void {
    this.httpService.mostrarCita(localStorage.getItem("Id_Usuario")).subscribe((data: any) => {
      this.Mcita = data;
      console.log("citas=" + this.Mcita);

      const events = this.Mcita.map(event => {
        return {
          title: event.Nombre,
          start: event.Fecha
        };
      });

      console.log("eventos", events);

      const calendarEl = document.getElementById('calendar');
      if (!calendarEl) {
        console.error("Elemento '#calendar' no encontrado.");
        return;
      }

      const calendar = new Calendar(calendarEl, {
      // Cargar citas existentes
        plugins: [dayGridPlugin],
       
        initialView: 'dayGridMonth',
        views: {
          customMonth: {
            type: 'dayGrid',
            duration: { months: 12 }, // Puedes ajustar el rango según tus necesidades
          }
        },
        
        events: events // Cargar citas existentes
      });
       
      calendar.render();
    });
  }
}

 
  

