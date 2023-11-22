import { Component, OnInit, HostListener } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http/http.service';

interface estatus {
  value: string;
  viewValue: string;
}

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
  ShowEditEvent: boolean = false;
  selected: Date = new Date();
  asunto: string = '';
  fechaInicio: any;
  fechaCierre: any;
  Descripcion: string = '';
  notificacionesActivadas: boolean = false;
  selectedStatus: any;
  
  status: estatus[] = [
    {value: 'Ninguno-0', viewValue: 'ninguno'},
    {value: 'Ocupado-1', viewValue: 'Ocupado'},
    {value: 'Pendiente-2', viewValue: 'Pendiente'},
  ];

  Delete(){
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Descartar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Descartado!",
          text: "Este evento ha sido descartado.",
          icon: "success"
        });
      }
    });

  }

  addEvent() {
    this.ShowAddEvent = true;
    setTimeout(() => {
      const modal = document.querySelector('.ShowAddEvent');
      if (modal) {
        modal.classList.add('mostrar');
      }
    }, 50);
  }
  closeEvent(){
    const modal = document.querySelector('.ShowAddEvent');
  if (modal) {
    modal.classList.remove('mostrar');
    setTimeout(() => {
      this.ShowAddEvent = false;
    }, 100);
   }  
  }

  EditEvent() {
    this.ShowEditEvent = true;
    setTimeout(() => {
      const modal = document.querySelector('.ShowAddEvent');
      if (modal) {
        modal.classList.add('mostrar');
      }
    }, 50);
  }



  Addnew() {
    console.log('Asunto:', this.asunto);
    console.log('fechaInicio:', this.fechaInicio);
    console.log('fechaCierre:', this.fechaCierre);
    console.log('Descripcion:', this.Descripcion);
    console.log('notificacionesActivadas:', this.notificacionesActivadas);
    console.log('selectedStatus:', this.selectedStatus);

    let dia= this.fechaInicio.getDate().toString();
    let mes= (this.fechaInicio.getMonth()+1).toString();
    let anio= this.fechaInicio.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;

    let dias= this.fechaCierre.getDate().toString();
    let mess= (this.fechaCierre.getMonth()+1).toString();
    let anios= this.fechaCierre.getFullYear().toString();
    let fecha2= anios+ "-" + mess +"-"+ dias;


    const modal = document.querySelector('.ShowAddEvent');
    if (modal) {
      modal.classList.remove('mostrar');
      setTimeout(() => {
        this.ShowAddEvent = false;
        this.showSuccessAlert();
      }, 100);
    }
  }
  
  showSuccessAlert() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se ha añadido tu evento con éxito",
      showConfirmButton: false,
      timer: 1500
    });
  }


  Editnew() {
    const modal = document.querySelector('.ShowAddEvent');
    if (modal) {
      modal.classList.remove('mostrar');
      setTimeout(() => {
        this.ShowAddEvent = false;
        this.showEditAlert();
      }, 100);
    }
  }
  
  showEditAlert() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cambios realizados con éxito",
      showConfirmButton: false,
      timer: 1500
    });
  }


  constructor(private httpservice:HttpService) {




  }

  ngOnInit(): void {}
}
