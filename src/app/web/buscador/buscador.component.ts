import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmuebles } from 'src/app/services/Interface/Interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  inmuebles: Inmuebles[] = [];
  inmueble!: Inmuebles;
  TInmuebles!: Inmuebles[];
  firstFormGroup!: FormGroup;
  segundoFormGroup!: FormGroup;
  tpropiedad: number | undefined;
  ubicacion: any | '';

  PPrecioDesde!: any | '1';
  PPrecioHasta!: any | '5000000000';

  constructor(private router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.obtenerDatosInmuebles();
    this.firstFormGroup = this.formBuilder.group({
      pId_Tipo_Inmueble: ['', [Validators.required]],
      pUbicacion: ['', [Validators.required]]
    })
    this.segundoFormGroup = this.formBuilder.group({
      pId_Tipo_Inmueble2: ['', [Validators.required]],
      pUbicacion2: ['', [Validators.required]]
    })
    this.tpropiedad = 1;
   
  }

  obtenerDatosInmuebles() {
    this.httpService.tipoInmueble().subscribe({
      next: (data) => {
        console.info(data)
        this.TInmuebles = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log("Complete")
    })
  }


  ResultsBusqCompra() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'venta', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000'} });
  }

  ResultsBusqRenta() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'renta', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000'} });
  }

  ResultsBusqRemate() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'remate', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000'} });
  }

  ResultsBusqDesarrollo() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'desarrollo', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'PrecioDesde': '1', 'PrecioHasta': '5000000000'} });
  }

  cambioTpropiedad(tprop:number){
    console.log('Selecciona Propiedad: ',tprop);
    this.tpropiedad = tprop;
  }

  cambioUbicacion(ubi:string){
    console.log('Selecciona Ubicacion: ',ubi);
    this.ubicacion = ubi;
  }



  onSubmit(){
    console.warn(this.segundoFormGroup.value);
    console.warn(this.firstFormGroup.value);
  }
  
  PageMapV() {
    this.router.navigate(["/web/maps"], { queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': 13, 'tipoP': 1} });
  }

  PageMap() {
    this.router.navigate(["/web/maps"], { queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion, 'bandera': 13, 'tipoP': 2} });
  }

}
