import { Component, OnInit } from '@angular/core';
//sidenav
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-master-admin',
  templateUrl: './master-admin.component.html',
  styleUrls: ['./master-admin.component.scss'],
  // standalone: true,
  // imports: [
  //   MatFormFieldModule,
  //   MatSelectModule,
  // ]
})

export class MasterAdminComponent  implements OnDestroy {
  mobileQuery: MediaQueryList;
  nombre: any;

     fillerNav = [
    { name: "altabroker", route: "altabroker",icon: "perm_contact_calendar" , label: "ALTA",number:'0'},
    { name: "eliminarasesores", route: "eliminaasesores",icon: "person" , label: "ELIMINAUSUARIO",number:'0' },
    { name: "altausuario", route: "altausuario",icon: "home" , label: "Alta usuario",number:'0' },
    { name: "altasocio", route: "altasocio",icon: "home" , label: "Alta socio",number:'0' },
    { name: "Salir",route: "web",icon: "logout", label: "SALIR" ,number:'1'}
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

    //this.router.navigate(["/web"]);
  }

}



