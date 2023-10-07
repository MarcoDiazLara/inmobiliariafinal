import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormGroup, } from '@angular/forms';
import {MatDialog, MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ClientepasswordComponent } from '../ventanaemergente/clientepassword/clientepassword.component'
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';





@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
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
    MatDialogModule, 
  ],
})


export class PerfilComponent implements OnInit {
emailFormControl = new FormControl('', [Validators.required, Validators.email]);
toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 
  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;


   constructor(public dialog: MatDialog,

    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
    
    ) {}
 
 
  ngOnInit(): void {
    this.formGeneral = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidopaterno: ['', [Validators.required]],
      apellidomaterno: ['', [Validators.required]],
      curp: ['', [Validators.required]],
      rfc: ['', [Validators.required]],
      contactoprincipal: ['', [Validators.required]],
      contactoemergencia: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nombreusuario: ['', [Validators.required]],
      imageInput: ['', [Validators.required]],
    });
  }

  // Apartado Dialog Pantalla Emergente 

  openpassword (){
    
    const dialogRef = this.dialog.open(ClientepasswordComponent,{
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }

  openDialog(): void {
    
  }

  Guardardatos(){
      

    if (this.formGeneral){
      let nombre = this.formGeneral.value.nombre;
      let apellidopaterno = this.formGeneral.value.apellidopaterno;
      let apellidomaterno = this.formGeneral.value.apellidomaterno;
      let curp = this.formGeneral.value.curp;
      let rfc = this.formGeneral.value.rfc;
      let contactoprincipal = this.formGeneral.value.contactoprincipal;
      let contactoemergencia = this.formGeneral.value.contactoemergencia;
      let email = this.formGeneral.value.email;
      let nombreusuario = this.formGeneral.value.nombreusuario;
      let imageInput = this.formGeneral.value.imageInput;


      alert('nombre: '+ nombre + 'apellidopaterno: ' + apellidopaterno + 'apellidomaterno: '+ apellidomaterno + 'curp: ' + curp + 'rfc: '+ rfc + 'contactoprincipal: ' + contactoprincipal + 'contactoemergencia: '+ contactoemergencia + 'email: ' + email + 'nombreusuario' + nombreusuario + 'imageInput' + imageInput); 
      
     }
}

 
}





