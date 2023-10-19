import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-altasocio',
  templateUrl: './altasocio.component.html',
  styleUrls: ['./altasocio.component.scss']

})
export class AltasocioComponent implements OnInit {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  

  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;


  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
  ) { }


  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      nombrerazons: ['', [Validators.required]],
      rfcempresa: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactoempresa: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      numext: ['', [Validators.required]],
      numint: ['', [Validators.required]],
      tipo_socio: ['',[Validators.required]],
      estados: ['',[Validators.required]],
      municipio:['',[Validators.required]],
      asentamientos:['',[Validators.required]],
      imageInput: ['', [Validators.required]],
    });
  }

  Guardardatos(){
      

    if (this.formGeneral){
      let nombrerazons = this.formGeneral.value.nombrerazons;
      let rfcempresa = this.formGeneral.value.rfcempresa;
      let email = this.formGeneral.value.email;
      let contactoempresa = this.formGeneral.value.contactoempresa;
      let calle = this.formGeneral.value.calle;
      let numext = this.formGeneral.value.numext; 
      let numint = this.formGeneral.value.numint;
      let tipo_socio = this.formGeneral.value.numint;
      let estados = this.formGeneral.value.numint;
      let municipio = this.formGeneral.value.numint;
      let asentamientos = this.formGeneral.value.numint;
     
      let imageInput = this.formGeneral.value.imageInput;


      alert('nombrerazons: '+ nombrerazons + 'rfcempresa: ' + rfcempresa + 'calle: '+ calle + 'numext: ' + numext +  'contactoempresa: ' + contactoempresa + 'numint: '+ numint + 'email: ' + email  + 'imageInput' + imageInput + 'tipo_socio' + tipo_socio + 'estados' + estados+ 'municipio'+ municipio + 'asentamientos' + asentamientos); 
      
     }
}


}
