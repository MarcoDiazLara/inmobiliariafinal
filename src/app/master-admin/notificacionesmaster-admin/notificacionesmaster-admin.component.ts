import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacionesmaster-admin',
  templateUrl: './notificacionesmaster-admin.component.html',
  styleUrls: ['./notificacionesmaster-admin.component.scss']
})
export class NotificacionesmasterAdminComponent implements OnInit {
  showNotificationList = false; // Variable para controlar la visibilidad de la lista de notificaciones
  notifications: any[] = [ // Tu arreglo de notificaciones
      { title: 'Notificación 1', summary: 'Resumen de la notificación 1', timestamp: new Date() },
      { title: 'Notificación 2', summary: 'Resumen de la notificación 2', timestamp: new Date() }
      // Agrega más notificaciones según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
    this.toggleNotificationList();
     }
     toggleNotificationList() {
       this.showNotificationList = !this.showNotificationList;
   }
}
