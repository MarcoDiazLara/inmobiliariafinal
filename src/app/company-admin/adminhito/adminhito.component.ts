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
  selector: 'app-adminhito',
  templateUrl: './adminhito.component.html',
  styleUrls: ['./adminhito.component.scss']
})
export class AdminhitoComponent implements OnInit {
  mostrarIcono = true;
  constructor(private httpService:HttpService) {}
  mostrarfechashito:HitoGeneral[]=[];
  
  saludo: string = '';
   Aux!: HitoGeneral;
   mostrarbroker: boolean = false;
   Ocultar(){
    this.mostrarbroker = !this.mostrarbroker;
  }

  ngOnInit(): void {
    this.onDateSelected(this.selected);
    this.SeleccionBrokers();
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
    // console.log('Fecha seleccionada:', this.selected);
    // console.log("Puto dani")
    let dia= this.selected.getDate().toString();
    let mes= (this.selected.getMonth()+1).toString();
    let anio= this.selected.getFullYear().toString();
    let fecha1= anio+ "-" + mes +"-"+ dia;
    
    //console.log(fecha1);
    // this.httpService.mostrarfechasHito(localStorage.getItem("Id_Usuario"), fecha1).subscribe((data:any)=>{
    //   this.mostrarfechashito=data;
    //   console.log(data);
    // })
    this.httpService.mostrarHitoGeneral(localStorage.getItem("Id_Socio"), fecha1).subscribe((data:any)=>{
      this.mostrarfechashito=data;
      console.log(data);
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

  // Delete(){
  //   Swal.fire({
  //     title: "¿Estas seguro?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Si, Descartar!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Descartado!",
  //         text: "Este evento ha sido descartado.",
  //         icon: "success"
  //       });
  //     }
  //   });

  // }

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

     //  ----------- Mostrar el select---------------
     let idaux;
     if(this.mostrarbroker){
       idaux = this.selectedStatus;
     }else{
       idaux = localStorage.getItem("Id_Usuario")
     }
     // -----------------------------------
    

    this.httpService.insertEvent(this.asunto, fecha1, fecha2, this.Descripcion,idaux ).subscribe((data:any)=>{
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
    //let xd = Date(this.fechaInicio1);
    
    // console.log(this.xd);
    // console.log(this.xd1);
    //  console.log(this.Aux.Id_Fecha_Hito+this.Aux.Asunto+this.Aux.Fecha_Inicio+this.Aux.Fecha_Cierre+this.Aux.Descripcion)
     this.httpService.ActualizacionFechasHito(this.Aux.Id_Fecha_Hito,this.Aux.Asunto,fecha1,fecha2,this.Aux.Descripcion).subscribe((data:any)=>{
      alert("Se actualizo fecha hito");
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

  SeleccionBrokers(){
    this.httpService.SeleccionarBrokers(localStorage.getItem("Id_Socio")).subscribe((resp:any)=>{
     if(resp !== 201){
      
    
       this.broker = resp[0].Id_Usuario;
       this.brokers = resp;
     }
    },(err)=>{
     console.log(err);
    })
   }
 
  
   



}
