import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { Notis } from 'src/app/services/Interface/Interfaces';

interface valores{
  Id_tipo_notificacion: any,
  Tipo_notificacion: any
}

@Component({
  selector: 'app-historial-notis',
  templateUrl: './historial-notis.component.html',
  styleUrls: ['./historial-notis.component.scss']
})
export class HistorialNotisComponent implements OnInit {
  @ViewChild('notificationlist') notificationlist!: ElementRef;
  nom_aux!: string;

  constructor( private formBuilder: FormBuilder,private httpService: HttpService,private dialog:MatDialog) { }
  tipo : valores[] = [];


  showNotificationList = false; // Variable para controlar la visibilidad de la lista de notificaciones
  notifications: Notis[] = [];

  fechaSeleccionada: Date = new Date();
  tipoSeleccionado: string = "";
  bandera: number = 0;
  

  ngOnInit(): void {

    let dia =  this.fechaSeleccionada.getDate();
      let dia1 =  this.fechaSeleccionada.getDate().toString();;
      if (dia < 10) {
        dia1 = "0" + dia1;
      }
      let mes = ( this.fechaSeleccionada.getMonth() + 1);
      let mes1 = ( this.fechaSeleccionada.getMonth() + 1).toString();
      if (mes < 10) {
        mes1 = "0" + mes1;
      }
      let anio =  this.fechaSeleccionada.getFullYear().toString();
       this.nom_aux = anio +"-"+ mes1+"-" + dia1;

    this.httpService.tipoNoti().subscribe((data:any)=>{
      this.tipo = data;
    })
    
    this.httpService.historial(localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      
      this.notifications = data;
     
      // Puedes agregar más lógica aquí si es necesario

      // Mostrar la lista de notificaciones
      this.toggleNotificationList();
      this.notificationlist.nativeElement.focus();
    })
    
  }
  toggleNotificationList() {
    this.showNotificationList = !this.showNotificationList;

}

  CerraDialogo(){
    this.dialog.closeAll();
 
    }

    onSelectTipo(event: any) {
      this.tipoSeleccionado = event.value;
      this.filtro();
    }
  
    onDateSelected(event: any) {
      this.fechaSeleccionada = event.value;
      let dia =  this.fechaSeleccionada.getDate();
      let dia1 =  this.fechaSeleccionada.getDate().toString();;
      if (dia < 10) {
        dia1 = "0" + dia1;
      }
      let mes = ( this.fechaSeleccionada.getMonth() + 1);
      let mes1 = ( this.fechaSeleccionada.getMonth() + 1).toString();
      if (mes < 10) {
        mes1 = "0" + mes1;
      }
      let anio =  this.fechaSeleccionada.getFullYear().toString();
       this.nom_aux = anio +"-"+ mes1+"-" + dia1;
       this.bandera = 1;

      this.filtro();
    }
  
  filtro(){
    if(this.bandera == 1){
    this.httpService.filtrohistorial(this.nom_aux, this.tipoSeleccionado,localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      if(data == 0){
        this.notifications = [];
      }else{
        this.notifications = data;
      }
      
    })
  }else{
    this.httpService.filtrohistorial("", this.tipoSeleccionado,localStorage.getItem("idpublicacion")).subscribe((data:any)=>{
      if(data == 0){
        this.notifications = [];
      }else{
        this.notifications = data;
      }
      
    })
  }
  }

}
