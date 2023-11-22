import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { SolicitudCambio } from 'src/app/services/Interface/Interfaces';


@Component({
  selector: 'app-cambioasesorcliente',
  templateUrl: './cambioasesorcliente.component.html',
  styleUrls: ['./cambioasesorcliente.component.scss']
 

})
export class CambioasesorclienteComponent implements OnInit {

  formGeneral!:FormGroup;

  solicitud:SolicitudCambio[]=[];
  // Id_Usuario: any;


  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
  ) { }
  


  ngOnInit(): void {
    let Id_usuario = localStorage.getItem("Id_Usuario");
    console.log(Id_usuario)
    this.httpService.MostrarInmueblesSolicitud(Id_usuario).subscribe((data:any)=>{
      this.solicitud=data;
      console.log(this.solicitud);
      });


    this.formGeneral = this.formBuilder.group({
      Inmueble: ['', [Validators.required]],
      motivosolicitud: ['', [Validators.required]]
  });
}


Guardardatos() {


  if (this.formGeneral) {
    let Inmueble = this.formGeneral.value.Inmueble;
    let motivocliente = this.formGeneral.value.motivocliente;
   

    alert( 'motivocliente'+'Inmueble'+ motivocliente + Inmueble);

  }
}

}
