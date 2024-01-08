import { Component, OnInit } from '@angular/core';

//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  nombre: any;

  fillerNav = [
    { name: "Perfil", route: "Perfil",icon: "person" , label: "Perfil",number:'0',  onClick:this.xd },
    { name: "Notificaciones", route: "Notificaciones",icon: "notifications" , label: "Notificaciones",number:'0',   onClick:this.xd },
    { name: "Hito", route: "Hitoagente",icon: "event" , label: "Fecha Hito",number:'0', onClick:this.xd},
    { name: "Menu", route: "Calendario",icon: "perm_contact_calendar" , label: "Calendario",number:'0', onClick:this.xd },
    { name: "Inventario", route: "Inventario",icon: "inventory" , label: "Inventario",number:'0' , onClick:this.xd},
    { name: "Salir",icon: "logout", label: "SALIR" ,number:'1', onClick: () =>  this.logout() },
    
  
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,
    private httpService: HttpService) {
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
