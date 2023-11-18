import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-cambioasesorcliente',
  templateUrl: './cambioasesorcliente.component.html',
  styleUrls: ['./cambioasesorcliente.component.scss']
 

})
export class CambioasesorclienteComponent implements OnInit {

  formGeneral!:FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
  ) { }
  


  ngOnInit(): void {
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
