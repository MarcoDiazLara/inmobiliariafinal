import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.scss']
})

export class CompanyAdminComponent implements OnDestroy {
  nombre : any;
  mobileQuery: MediaQueryList;

     fillerNav = [
    { name: "Perfil", route: "Perfil",icon: "person" , label: "Perfil",number:'0' },
    { name: "notificaciones", route: "Notificaciones",icon: "notifications" , label: "Notificaciones",number:'0'},
    { name: "altabrokers", route: "altabrokers",icon: "group_add" , label: "Alta de Usuarios",number:'0'},
    { name: "Asignar-reasignar", route: "Asignar-reasignar",icon: "groups" , label: "Asignar-Reasignar",number:'0'},
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

    // alert("diste clic en salir"+op);
  }

}


