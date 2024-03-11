import { Component, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http/http.service';
import { ThisReceiver } from '@angular/compiler';
import { Broker } from 'src/app/services/Interface/Interfaces';
import { mostrarFechasHito } from 'src/app/services/Interface/Interfaces';
import { HitoGeneral } from 'src/app/services/Interface/Interfaces';




interface estatus {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-fechashito',
  templateUrl: './fechashito.component.html',
  styleUrls: ['./fechashito.component.scss']
})
export class FechashitoComponent implements OnInit {

  mostrarIcono = true;

  constructor(private httpService:HttpService) {}

  mostrarfechashito:HitoGeneral[]=[];
  
  saludo: string = '';
   Aux!: HitoGeneral;

  ngOnInit(): void {
    this.onDateSelected(this.selected);
    this.SeleccionaAsesorhito();
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
  onDateSelected(event: any): void {
    // Aquí obtienes la fecha seleccionada
    
    let dia= this.selected.getDate().toString();
    let mes= (this.selected.getMonth()+1).toString();
    let anio= this.selected.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;
    
    this.httpService.mostrarfechasHito(localStorage.getItem("Id_Usuario"), fecha1).subscribe((data:any)=>{
      this.mostrarfechashito=data;
      
    })
    // Puedes hacer lo que quieras con la fecha seleccionada
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
  // ----------------------------------
  asunto1: string = '';
  fechaInicio1: any;
  fechaCierre1: any;
  Descripcion1: string = '';
  
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
      
      return;
    }
    alert(idHito)
    this.httpService.EliminarFechasHitos(idHito).subscribe((data:any) => {
 
      Swal.fire({
        title: "Éxito!!",
        text: "Se elimino fecha hito!",
        icon: "success"
      });
      // Después de realizar las acciones necesarias, puedes ocultar el icono
      this.mostrarIcono = false;

    },
    (error) => {
      // Manejar errores del servicio/API
      
    }

    );
   

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

  EditEvent(Edicthito:any) {
    this.ShowEditEvent = true;
    this.Aux=Edicthito;
    this.fechaInicio1 = this.Aux.Fecha_Inicio;
    this.fechaCierre1 = this.Aux.Fecha_Cierre;
    this.xd= new Date(this.fechaInicio1+"T00:00:00");
     this.xd1= new Date(this.fechaCierre1+"T00:00:00");
     this.xd.setMinutes(this.xd.getTimezoneOffset());
     this.xd1.setMinutes(this.xd1.getTimezoneOffset());
    
    setTimeout(() => {
      const modal = document.querySelector('.ShowAddEvent');
      if (modal) {
        modal.classList.add('mostrar');
      }
    }, 50);
  }
  



  Addnew() {
    const modal = document.querySelector('.ShowAddEvent');
    

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

    this.httpService.insertEvent(this.asunto, fecha1, fecha2, this.Descripcion, this.selectedStatus ).subscribe((data:any)=>{
      if (data == 1){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Evento añadido con exito.",
          showConfirmButton: false,
          timer: 1500
        });
        
      }
    });
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
  xd!: Date;
  xd1!: Date;

  Editnew() {
    let dia= this.xd.getDate().toString();
    let mes= (this.xd.getMonth()+1).toString();
    let anio= this.xd.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;

    let dias= this.xd1.getDate().toString();
    let mess= (this.xd1.getMonth()+1).toString();
    let anios= this.xd1.getFullYear().toString();
    let fecha2= anios+ "-" + mess +"-"+ dias;
    const modal = document.querySelector('.ShowAddEvent');
 
     this.httpService.ActualizacionFechasHito(this.Aux.Id_Fecha_Hito,this.Aux.Asunto,fecha1,fecha2,this.Aux.Descripcion).subscribe((data:any)=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se actualizo la fecha hito",
        showConfirmButton: false,
        timer: 1500
      });
     })
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
  broker !: Broker;
  brokers : Broker [] = [];

  SeleccionaAsesorhito(){
    this.httpService.SeleccionaAsesorhito(localStorage.getItem("Id_Usuario")).subscribe((resp:any)=>{
     if(resp !== 201){
      
    
       this.broker = resp[0].Id_Usuario;
       this.brokers = resp;
     }
    },(err)=>{
     
    })
   }





}
