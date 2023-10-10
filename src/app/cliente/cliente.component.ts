import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})

export class ClienteComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  
  nombre : any;
 
     fillerNav = [

    // { name: "Perfil", route: "Perfil",icon: "person" , label: "Perfil",number:'0' },
    // { name: "Notificaciones", route: "notificacion",icon: "notifications" , label: "Notificaciones",number:'0' },
    // { name: "seguimientocliente", route: "seguimiento",icon: "content_paste_search" , label: "Seguimiento",number:'0' },
    // { name: "agendarcitacliente", route: "agendacita",icon: "calendar_today" , label: "Agendar Cita",number:'0' },
    // { name: "cambioasesorcliente", route: "reasignacion",icon: "assignment" , label: "Reasignar",number:'0' },
    // { name: "Salir",icon: "logout", label: "SALIR" ,number:'1'}
    { name: "Perfil", route: "clientePerfil",icon: "person" , label: "PERFIL",number:'0' },
    { name: "Seguimiento", route: "seguimiento",icon: "perm_contact_calendar" , label: "SEGUMIENTO",number:'0'},
    { name: "Notificaciones", route: "notificaciones",icon: "person" , label: "NOTIFICACIONES",number:'0' },
    { name: "Salir",route: "index",icon: "logout", label: "SALIR" ,number:'1'}


  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nombre = localStorage.getItem("Nombre_Usuario");
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun=true;

  public salir(op:any) {

    // alert("diste clic en salir"+op);
  }

}


