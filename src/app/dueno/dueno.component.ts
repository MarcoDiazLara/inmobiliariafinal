import { Component, OnInit } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.scss']
})
export class DuenoComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  nombre: any;

  fillerNav = [
    { name: "bienvenida", route: "bienvenida", icon: "home", label: "Hola", number: '0' , onClick:this.xd},
    { name: "perfil", route: "perfil", icon: "person", label: "perfil", number: '0' , onClick:this.xd},
    { name: "Notificaciones", route: "notificacion-dueno", icon: "notifications", label: "Notificaciones", number: '0' , onClick:this.xd},
    { name: "Calendario", route: "MiAsesor", icon: "date_range", label: " Mi Asesor", number: '0' , onClick:this.xd},
    { name: "cambioasesor", route: "cambioasesor",icon: "3p" , label: "Cambio de Asesor",number:'0', onClick:this.xd },
    { name: "Asignar-reasignar", route: "Interesados", icon: "groups", label: "Interesados", number: '0' , onClick:this.xd},
    { name: "Salir", route: "web", icon: "logout", label: "Salir", number: '1', onClick: () =>  this.logout() }

  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
    private httpService: HttpService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nombre = localStorage.getItem("Nombre_Usuario");
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  public salir() {
    //this.router.navigate(["/web"]);
    // alert("diste clic en salir"+op);
  }

  xd(){

  }

  logout(){
    const itemsToRemove = [
      'Nombre_Usuario',
      'Id_Usuario',
      'Id_Tipo_Usuario',
      'Id_Tipo_Plan',
      'Bandera',
      'Id_Socio'
    ];

    itemsToRemove.forEach(item => {
      localStorage.removeItem(item);
    });

    this.httpService.setGlobalVariable(false);
    this.router.navigate(['/web']);

  }



}