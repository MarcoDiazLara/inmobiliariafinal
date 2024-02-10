import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { Notis } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-historial-notis',
  templateUrl: './historial-notis.component.html',
  styleUrls: ['./historial-notis.component.scss']
})
export class HistorialNotisComponent implements OnInit {
  @ViewChild('notificationlist') notificationlist!: ElementRef;

  constructor( private formBuilder: FormBuilder,private httpService: HttpService,private dialog:MatDialog) { }



  showNotificationList = false; // Variable para controlar la visibilidad de la lista de notificaciones
  notifications: Notis[] = [];
  

  ngOnInit(): void {
    
    this.httpService.getNotis("15").subscribe((data:any)=>{
      
      this.notifications = data;
      console.log(this.notifications);
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

}
