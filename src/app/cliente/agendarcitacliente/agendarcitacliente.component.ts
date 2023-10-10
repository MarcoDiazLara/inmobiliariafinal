import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { validateVerticalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-agendarcitacliente',
  templateUrl: './agendarcitacliente.component.html',
  styleUrls: ['./agendarcitacliente.component.scss'],
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
    MatCheckboxModule,
    MatButtonModule,
    JsonPipe,
  ],

})
export class AgendarcitaclienteComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  formGeneral!: FormGroup;
  loading = false;
  hide2 = true;


  constructor(
    private formBuilder: FormBuilder,
  ) {}


  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidopaterno: ['', [Validators.required]],
      apellidomaterno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactoprincipal: ['', [Validators.required]],
      motivocliente:['',[Validators.required]],
      fechacita:['',[Validators.required]],
  });
  }

  Guardardatos() {


    if (this.formGeneral) {
      let nombre = this.formGeneral.value.nombre;
      let apellidopaterno = this.formGeneral.value.apellidopaterno;
      let apellidomaterno = this.formGeneral.value.apellidomaterno;
      let contactoprincipal = this.formGeneral.value.contactoprincipal;
      let email = this.formGeneral.value.email;
      let motivocliente = this.formGeneral.value.motivocliente;
      let fechacita = this.formGeneral.value.fechacita;
      

      alert('nombre: ' + nombre + 'apellidopaterno: ' + apellidopaterno + 'apellidomaterno: ' + apellidomaterno + 'contactoprincipal: ' + contactoprincipal + 'email: ' + email );

    }
  }
}

