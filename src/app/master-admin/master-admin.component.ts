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

     fillerNav = [
    { name: "Perfil", route: "perfil",icon: "person" , label: "PERFIL",number:'0' },
    { name: "altabroker", route: "altabroker",icon: "perm_contact_calendar" , label: "ALTA",number:'0'},
    { name: "eliminarasesores", route: "eliminaasesores",icon: "person" , label: "ELIMINAUSUARIO",number:'0' },
    { name: "Inmuebles", route: "inmueble",icon: "home" , label: "Inmueble",number:'0' },
    { name: "Salir",icon: "logout", label: "SALIR" ,number:'1'}
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun=true;

  public salir(op:any) {

    // alert("diste clic en salir"+op);
  }

}



