import { Component, OnInit, HostListener } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-fecha-hito-agentes',
  templateUrl: './fecha-hito-agentes.component.html',
  styleUrls: ['./fecha-hito-agentes.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class FechaHitoAgentesComponent implements OnInit {
  ShowAddEvent: boolean = false;
  selected: Date = new Date();

  addEvent() {
    this.ShowAddEvent = !this.ShowAddEvent;
    setTimeout(() => {
      const modal = document.querySelector('.ShowAddEvent');
      if (modal) {
        modal.classList.add('mostrar');
      }
    }, 50);
  }



  constructor() {}

  ngOnInit(): void {}
}
