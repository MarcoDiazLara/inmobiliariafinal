import { Component, OnInit, HostListener } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import Swal from 'sweetalert2';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { HttpService } from 'src/app/services/http/http.service';
import { mostrarcita } from 'src/app/services/Interface/Interfaces';
import { ThisReceiver } from '@angular/compiler';
import { mostrarFechasHito } from 'src/app/services/Interface/Interfaces';


interface estatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fecha-hito-agentes',
  templateUrl: './fecha-hito-agentes.component.html',
  styleUrls: ['./fecha-hito-agentes.component.scss']})
export class FechaHitoAgentesComponent implements OnInit {
  mostrarIcono = true;
  // idHito: any; // Puedes obtener este valor de alguna manera, por ejemplo, desde un modelo o un servicio

    constructor(private httpService:HttpService) {

  }

  Mcita: mostrarcita[] = [];


  hola(){

    this.httpService.mostrarCita(localStorage.getItem('Id_Usuario')).subscribe(
      (data: any) => {
        this.Mcita = data;
        console.log(this.Mcita);
      },
      (error) => {
        console.error('Error al obtener citas', error);
      }
    );
  
    }
  
  
  saludo: string = '';
  mostrarfechashito:mostrarFechasHito[]=[];


  ngOnInit(): void {
    this.hola();
    let dia= this.selected.getDate().toString();
    let mes= (this.selected.getMonth()+1).toString();
    let anio= this.selected.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;
    console.log(fecha1);
    this.httpService.mostrarfechasHito(localStorage.getItem("Id_Usuario"), fecha1).subscribe((data:any)=>{
      this.mostrarfechashito=data;
      console.log(data);
    })
    const fecha = new Date();
    const hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
      this.saludo = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
      this.saludo = '¡Buenas tardes!';
    } else {
      this.saludo = '¡Buenas noches!';
    }
  }
  
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
    {value: 'Ninguno', viewValue: 'ninguno'},
    {value: 'Ocupado', viewValue: 'Ocupado'},
    {value: 'Pendiente', viewValue: 'Pendiente'},
  ];

  ver(){
    this.selected = new Date();


  }

   Delete(idHito: any){
    if (!idHito) {
      console.error('Se requiere el valor de idHito para llamar a EliminarFechasHitos');
      return;
    }
    alert(idHito)
    this.httpService.EliminarFechasHitos(idHito).subscribe((data:any) => {
      console.log('Respuesta del servicio:', data);
      alert("Se eliminar Fecha");
      // Después de realizar las acciones necesarias, puedes ocultar el icono
      this.mostrarIcono = false;

    },
    (error) => {
      // Manejar errores del servicio/API
      console.error('Error al llamar al servicio:', error);
    }

    );
   

  }
   // Swal.fire({
    //   title: "¿Estas seguro?", 
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Si, Descartar!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Descartado!",
    //       text: "Este evento ha sido descartado.",
    //       icon: "success"
    //     });
    //   }
    // });


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
    const modal = document.querySelector('.ShowAddEvent');
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
    let aux ="";
    if (this.notificacionesActivadas == true ){
      aux = "1";
    }else {
      aux = "0";
    }

    // this.httpservice.insertEvent(this.asunto, fecha1, fecha2, this.Descripcion, aux, this.selectedStatus, localStorage.getItem("Id_Usuario") ).subscribe((data:any)=>{
    //   if (data == 1){
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Evento añadido con exito.",
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
        
    //   }
    //});
    if (modal) {
      modal.classList.remove('mostrar');
      setTimeout(() => {
        this.ShowAddEvent = false;
        this.añadirevent();
      }, 100);
    }
  }


  añadirevent() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cambios realizados con éxito",
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
   
  onDateSelected(event: any): void {
    // Aquí obtienes la fecha seleccionada
    // console.log('Fecha seleccionada:', this.selected);
    // console.log("Puto dani")
    let dia= this.selected.getDate().toString();
    let mes= (this.selected.getMonth()+1).toString();
    let anio= this.selected.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;
    console.log(fecha1);
    this.httpService.mostrarfechasHito(localStorage.getItem("Id_Usuario"), fecha1).subscribe((data:any)=>{
      this.mostrarfechashito=data;
      console.log(data);
    })
    // Puedes hacer lo que quieras con la fecha seleccionada
  }


  
}
