import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atajos',
  templateUrl: './atajos.component.html',
  styleUrls: ['./atajos.component.css']
})
export class AtajosComponent implements OnInit {


  tpropiedad: String | undefined;
  ubicacion: String | undefined;

  constructor( private router:Router) { }
  ResultadoosBusqueda(){
    this.router.navigate(["/inmueble/vista"]);
  }

  ResultadoosBusqueda4(){
    let bandera = 4;
    this.tpropiedad = '0'; 
    this.router.navigate(["/inmueble/vista"],{ queryParams: {  'action': 'venta', 'tpropiedad': '1', 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':'' }});
    //this.router.navigate(["/inmueble/vista"],{ queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': bandera} });
  }
  ResultadoosBusqueda1(){
    let bandera = 1;
    this.router.navigate(["/inmueble/vista"],{ queryParams: {  'action': 'renta', 'tpropiedad': '2', 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':'' }});
    //this.router.navigate(["/inmueble/vista"],{ queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': bandera} });
  }

  ResultadoosBusqueda2(){
    let bandera = 2;
    this.tpropiedad = '0';
    this.router.navigate(["/inmueble/vista"],{ queryParams: {  'action': 'remate', 'tpropiedad': '1', 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':'' }});
    //this.router.navigate(["/inmueble/vista"],{ queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': bandera} });
  }

  ResultadoosBusqueda3(){
    let bandera = 3;
    this.tpropiedad = '0';
    this.router.navigate(["/inmueble/vista"],{ queryParams: {  'action': 'desarrollo', 'tpropiedad': '1', 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000', 'Keywords': '' , 'RVR': '' , 'Video': '' , 'Plano': '', 'Bano': '', 'Cocina': '', 'Alberca': '', 'Gym': '', 'Esta': '', 'FAnt':'', 'FPub':'' }});
    //this.router.navigate(["/inmueble/vista"],{ queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': bandera} });
  }


  ngOnInit(): void {
  }

}
