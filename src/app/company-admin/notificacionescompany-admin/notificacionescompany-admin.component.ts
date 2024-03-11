import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Notis } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-notificacionescompany-admin',
  templateUrl: './notificacionescompany-admin.component.html',
  styleUrls: ['./notificacionescompany-admin.component.scss']
})
export class NotificacionescompanyAdminComponent implements OnInit {
  showNotificationList = false; // Variable para controlar la visibilidad de la lista de notificaciones
  notifications: Notis[] = [  ];

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.httpService.getNotis(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
      
      this.notifications = data;
      
      // Puedes agregar más lógica aquí si es necesario

      // Mostrar la lista de notificaciones
      this.toggleNotificationList();
    })
     }
     toggleNotificationList() {
       this.showNotificationList = !this.showNotificationList;
   }

}
