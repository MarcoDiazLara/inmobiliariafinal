import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { detallesdelInmueble } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-inmuebledetalles',
  templateUrl: './inmuebledetalles.component.html',
  styleUrls: ['./inmuebledetalles.component.scss']
})
export class InmuebledetallesComponent implements OnInit {

  formGeneral!:FormGroup;

  detalles!: detallesdelInmueble;
  id_publicacion: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private http:HttpService,
  ) { }

  ngOnInit(): void {

    let id_publicacion = localStorage.getItem("id_publicacion");
    
    this.http.mostrarDetallesInmueble (id_publicacion).subscribe((data:any)=>{
      this.detalles=data;
      console.log(this.detalles);
      });


    this.formGeneral = this.formBuilder.group({
      Terrenometros: ['',[Validators.required]],
      Construccion: ['',[Validators.required]],
      Numero_de_recamaras: ['',[Validators.required]],
      Numero_de_baños: ['',[Validators.required]],
      Numero_de_pisos: ['',[Validators.required]],
      Años_de_Antiguedad: ['',[Validators.required]],
      Acabados: ['',[Validators.required]],
      Gimnasio: ['',[Validators.required]],
      Estacionamiento: ['',[Validators.required]],
      Jardin: ['',[Validators.required]],
      Cocina_Integral: ['',[Validators.required]],
      Alberca: ['',[Validators.required]],
      Roof_Garden: ['',[Validators.required]],
  })



}



closeDialog(){
  this.dialog.closeAll();
}

}
