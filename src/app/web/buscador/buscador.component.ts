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
  firstFormGroup!: FormGroup;
  tpropiedad: String | undefined;
  ubicacion: String | undefined;

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
  }

  obtenerDatosInmuebles() {
    this.httpService.tipoInmueble().subscribe((resp: any) => {
      if (resp !== 201) {
        this.inmueble = resp[0].id_Tipo_Inmueble;
        this.inmuebles = resp;
      }
    }, (err) => {
      console.log(err);
    })
  }


  ResultadoosBusquedaC() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'compra', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion} });
  }

  ResultadoosBusquedaR() {
    this.router.navigate(["/inmueble/vista"], { queryParams: { 'action': 'renta', 'tpropiedad': this.tpropiedad, 'ubicacion': this.ubicacion} });
  }

  cambioTpropiedad(tprop:string){
    console.log('Selecciona Propiedad: ',tprop);
    this.tpropiedad = tprop;
  }

  cambioUbicacion(ubi:string){
    console.log('Selecciona Ubicacion: ',ubi);
    this.ubicacion = ubi;
  }

  onSubmit(){
    console.warn(this.firstFormGroup.value);
  }

  PageMap() {
    this.router.navigate(["/web/maps"]);

  }

}
