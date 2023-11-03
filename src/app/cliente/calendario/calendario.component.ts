import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ElementRef, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { mostrarcita } from 'src/app/services/Interface/Interfaces';


const MIS_EVENTOS = [
  {
    title: 'Evento 1',
    date: '2023-10-11'
  },
  {
    title:'Evento 2',
    date:'2023-10-15'
  }
];


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements  AfterViewInit { 

  constructor (private httpService: HttpService){}

  Mcita:mostrarcita[]= [];
  

  mostrarFormulario = false;
  nuevaCita = { fecha: '', titulo: '' };
  citas: any[] = MIS_EVENTOS;

  ngAfterViewInit(): void {
    this.httpService.mostrarCita(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
      this.Mcita=data;
      // console.log(data);
    })
    const calendarEl = document.getElementById('calendar');
     if (!calendarEl) {
      console.error("Elemento '#calendar' no encontrado.");
     return;
    }
   const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: this.citas // Cargar citas existentes
  });
  calendar.render();
  }
  

 
  
  
   
 }
 
  

