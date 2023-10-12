import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import {FormControl} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-altasocio',
  templateUrl: './altasocio.component.html',
  styleUrls: ['./altasocio.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgFor,
    NgIf, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatIconModule,
  ]
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
      let imageInput = this.formGeneral.value.imageInput;


      alert('nombrerazons: '+ nombrerazons + 'rfcempresa: ' + rfcempresa + 'calle: '+ calle + 'numext: ' + numext +  'contactoempresa: ' + contactoempresa + 'numint: '+ numint + 'email: ' + email  + 'imageInput' + imageInput); 
      
     }
}


}
