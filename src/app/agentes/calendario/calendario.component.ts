import { Component, AfterViewInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpService } from 'src/app/services/http/http.service';
import { mostrarcita } from 'src/app/services/Interface/Interfaces';
import { Citas1Component } from '../citas1/citas1.component';
import esLocale from '@fullcalendar/core/locales/es';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss' ]
  // ,'./fullcalendar-custom.css'
})
export class CalendarioComponent implements AfterViewInit {


  constructor(private httpService: HttpService, private dialog: MatDialog) {}

  Mcita: mostrarcita[] = [];

  ngAfterViewInit(): void {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) {
      
      return;
    }

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      validRange: {
        start: '2023-01-01',
        end: '2030-12-31',
      },
      initialView: 'dayGridMonth',
      showNonCurrentDates: true,
      locale: esLocale,
      eventClick: this.mostrarVentanaEmergente.bind(this),
    });

    calendar.render(); // Renderiza el calendario antes de obtener las citas

    this.httpService.citasAsesor(localStorage.getItem('Id_Usuario')).subscribe(
      (data: any) => {
        this.Mcita = data;

        const evento = this.Mcita.map((event) => {
          return {
            title: event.Nombre,
            start: event.Fecha,
            Hora: event.Hora,
            Calle: event.Calle,
            Num_Ext: event.Num_Ext,
            Num_Int: event.Num_Int,
            Email: event.Email,
            Telefono: event.Telefono,
            Mensaje: event.Mensaje,
            Nombre_Publicacion: event.Nombre_Publicacion,
            Id_Usuario: event.Id_Usuario,
            Medio_Contacto: event.Medio_Contacto,
          };
        });

        // Actualiza los eventos después de obtener las citas
        calendar.removeAllEvents();
        calendar.addEventSource(evento);
      },
      (error) => {
       
      }
    );
  }

  mostrarVentanaEmergente(info: any): void {
    const fecha = info.event.start;
    let dia= fecha.getDate().toString();
    let mes= (fecha.getMonth()+1).toString();
    let anio= fecha.getFullYear().toString();
    let fecha1= dia+ "-" + mes +"-"+ anio;

      const Nombre= info.event.title;
      const Hora= info.event.extendedProps.Hora;
      const Calle= info.event.extendedProps.Calle;
      const Num_Ext= info.event.extendedProps.Num_Ext;
      const Num_Int= info.event.extendedProps.Num_Int;
      const Email= info.event.extendedProps.Email;
      const Telefono= info.event.extendedProps.Telefono;
      const Mensaje= info.event.extendedProps.Mensaje;
      const Nombre_Publicacion= info.event.extendedProps.Nombre_Publicacion;
      const Id_Usuario= info.event.extendedProps.Id_Usuario;
      const Medio_Contacto= info.event.extendedProps.Medio_Contacto;
     
    // Abre el modal y pasa la información de la cita
    this.dialog.open(Citas1Component, {

      data: {
        fecha: fecha1,
        Nombre: Nombre,
        Calle:Calle,
        Num_Ext:Num_Ext,
        Num_Int:Num_Int,
        Email:Email,
        Telefono:Telefono,
        Mensaje:Mensaje,
        Nombre_Publicacion:Nombre_Publicacion,
        Id_Usuario:Id_Usuario,
        Medio_Contacto:Medio_Contacto,
        Hora:Hora,
      },
    });
  }
}
  // constructor(private httpService: HttpService, private dialog: MatDialog) {}

  // Mcita: mostrarcita[] = [];

  // ngAfterViewInit(): void {
  //   this.httpService.mostrarCita(localStorage.getItem("Id_Usuario")).subscribe((data: any) => {
  //     this.Mcita = data;

  //     const evento = this.Mcita.map(event => {
  //       return {
  //         title: event.Nombre, 
           
  //         start: event.Fecha,
  //         Hora: event.Hora,
  //         Calle:event.Calle,
  //         Num_Ext: event.Num_Ext,
  //         Num_Int: event.Num_Int,
  //         Email: event.Email,
  //        Telefono: event.Telefono,
  //        Mensaje:  event.Mensaje,
  //        Nombre_Publicacion: event.Nombre_Publicacion,
  //        Id_Usuario: event.Id_Usuario,
  //        Medio_Contacto:event.Medio_Contacto,
          
          
  //       };
  //     });

  //     const calendarEl = document.getElementById('calendar');
  //     if (!calendarEl) {
  //       console.error("Elemento '#calendar' no encontrado.");
  //       return;
  //     }

  //     const calendar = new Calendar(calendarEl, {
  //       plugins: [dayGridPlugin],
  //       validRange: {
  //         start: '2023-01-01',
  //         end: '2023-12-31',
         
  //       },
  //       initialView: 'dayGridMonth',
  //       showNonCurrentDates: true,
  //       events: evento,
  //       locale: esLocale, // Establece el idioma en español
  //       eventClick: this.mostrarVentanaEmergente.bind(this), // Manejador de clic en eventos
  //     });

  //     calendar.render();
  //   });
  // }

  // mostrarVentanaEmergente(info: any): void {
  //   const fecha = info.event.start;
  //   let dia= fecha.getDate().toString();
  //   let mes= (fecha.getMonth()+1).toString();
  //   let anio= fecha.getFullYear().toString();
  //   let fecha1= dia+ "-" + mes +"-"+ anio;

  //     const Nombre= info.event.title;
  //     const Hora= info.event.extendedProps.Hora;
  //     const Calle= info.event.extendedProps.Calle;
  //     const Num_Ext= info.event.extendedProps.Num_Ext;
  //     const Num_Int= info.event.extendedProps.Num_Int;
  //     const Email= info.event.extendedProps.Email;
  //     const Telefono= info.event.extendedProps.Telefono;
  //     const Mensaje= info.event.extendedProps.Mensaje;
  //     const Nombre_Publicacion= info.event.extendedProps.Nombre_Publicacion;
  //     const Id_Usuario= info.event.extendedProps.Id_Usuario;
  //     const Medio_Contacto= info.event.extendedProps.Medio_Contacto;
  //     // console.log(Calle);
  //   // Abre el modal y pasa la información de la cita
  //   this.dialog.open(Citas1Component, {

  //     data: {
  //       fecha: fecha1,
  //       Nombre: Nombre,
  //       Calle:Calle,
  //       Num_Ext:Num_Ext,
  //       Num_Int:Num_Int,
  //       Email:Email,
  //       Telefono:Telefono,
  //       Mensaje:Mensaje,
  //       Nombre_Publicacion:Nombre_Publicacion,
  //       Id_Usuario:Id_Usuario,
  //       Medio_Contacto:Medio_Contacto,
  //       Hora:Hora,

    
        
  //     },
  //   });
  // }

