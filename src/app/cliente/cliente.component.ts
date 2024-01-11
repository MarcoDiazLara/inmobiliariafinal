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
    { name: "Perfil", route: "Perfil",icon: "person" , label: "Perfil",number:'0' },
    { name: "Notificaciones", route: "notificacion",icon: "notifications" , label: "Notificaciones",number:'0' },
    { name: "calendario", route: "calendario",icon: "assignment" , label: "calendario",number:'0' },
    { name: "Salir",route: "web",icon: "logout", label: "SALIR" ,number:'1'},
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

    
  }

}


