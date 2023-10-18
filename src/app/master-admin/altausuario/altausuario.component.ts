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
import { tipoUsuario } from 'src/app/services/Interface/Interfaces';



interface Status {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.scss'],
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
    
  ],
})


export class AltausuarioComponent implements OnInit {
  typeUsers : tipoUsuario [] = [];
  typeUser !: tipoUsuario;



  estados: Status[] = [
    {value: 'Activo', viewValue: 'Activo'},
    {value: 'Inactivo', viewValue: 'Inactivo'},
  ];
 
   
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
    this.obtenerTipoUsuario();
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
        password: ['', [Validators.required]],
        estatus: ['', [Validators.required]],
        descripcionusuario: ['', [Validators.required]],
        imageInput: ['', [Validators.required]],
      });
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
      let estatus = this.formGeneral.value.estatus;
      let descripcionusuario = this.formGeneral.value.descripcionusuario;
      let imageInput = this.formGeneral.value.imageInput;


      alert('nombre: '+ nombre + 'apellidopaterno: ' + apellidopaterno + 'apellidomaterno: '+ apellidomaterno + 'curp: ' + curp + 'rfc: '+ rfc + 'contactoprincipal: ' + contactoprincipal + 'contactoemergencia: '+ contactoemergencia + 'email: ' + email + 'nombreusuario' + nombreusuario + 'estatus' + estatus + 'descripcionusuario'+ descripcionusuario + 'imageInput' + imageInput); 
      
     }
}

obtenerTipoUsuario(){
  this.httpService.obtenerTipoUser().subscribe((resp:any)=>{
   if(resp !== 201){
    
     this.typeUser = resp[0].Id_Tipo_Usuario;
     this.typeUsers = resp;
   }
  },(err)=>{
   console.log(err);
  })
 }

}
