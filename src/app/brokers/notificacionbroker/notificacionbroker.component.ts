import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Notis } from 'src/app/services/Interface/Interfaces';

@Component({
  selector: 'app-notificacionbroker',
  templateUrl: './notificacionbroker.component.html',
  styleUrls: ['./notificacionbroker.component.scss']
})
export class NotificacionbrokerComponent implements OnInit {
  showNotificationList = false; // Variable para controlar la visibilidad de la lista de notificaciones
  notifications: Notis[] = [ ];
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.httpService.getNotis(localStorage.getItem("Id_Usuario")).subscribe((data:any)=>{
      
      this.notifications = data;
      console.log(this.notifications);
      // Puedes agregar más lógica aquí si es necesario

      // Mostrar la lista de notificaciones
      this.toggleNotificationList();
    })
  }
  toggleNotificationList() {
    this.showNotificationList = !this.showNotificationList;
}

}
