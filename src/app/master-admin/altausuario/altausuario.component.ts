import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoUsuario } from 'src/app/services/Interface/Interfaces';
import { LocalizedString } from '@angular/compiler';
import Swal from 'sweetalert2';



interface Status {
  value: string;
  viewValue: string;
}
interface Tipo{
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.scss']
})


export class AltausuarioComponent implements OnInit {
  //  : tipoUsuario [] = [];
   typeUser !: tipoUsuario;
  typeUsers: Tipo[] = [
    {value: '6', viewValue: 'Super Usuario'},
    
  ];


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
   
      this.formGeneral = this.formBuilder.group({
        seleccionausuario: ['',[Validators.required]],
        nombre: ['', [Validators.required]],
        apellidopaterno: ['', [Validators.required]],
        apellidomaterno: ['', [Validators.required]],
        curp: ['', [Validators.required]],
        rfc: ['', [Validators.required]],
        contactoprincipal: ['', [Validators.required]],
        contactoemergencia: ['', [Validators.required]],
        email: ['', [Validators.required]],
        nombreusuario: ['',[Validators.required]],
        password: ['', [Validators.required]],
        estatus: ['', [Validators.required]],
        descripcionusuario: ['', [Validators.required]],
        imageInput: ['', [Validators.required]],
      });
  }

  Guardardatos(){
      

    if (this.formGeneral && this.formGeneral.valid){
      let nombre = this.formGeneral.value.nombre;
      let apellidopaterno = this.formGeneral.value.apellidopaterno;
      let apellidomaterno = this.formGeneral.value.apellidomaterno;
      let contra = this.formGeneral.value.password;
      let curp = this.formGeneral.value.curp;
      let rfc = this.formGeneral.value.rfc;
      let contactoprincipal = this.formGeneral.value.contactoprincipal;
      let contactoemergencia = this.formGeneral.value.contactoemergencia;
      let email = this.formGeneral.value.email;
      let nombreusuario = this.formGeneral.value.nombreusuario;
      let estatus = this.formGeneral.value.estatus;
      let descripcionusuario = this.formGeneral.value.descripcionusuario;
      let imageInput = this.formGeneral.value.imageInput;

      let typeuser = this.formGeneral.value.seleccionausuario;

      let id = localStorage.getItem("Id_Usuario");

      this.httpService.registroCompletoBroker(nombre,apellidopaterno,apellidomaterno,nombreusuario,contra
        ,email,contactoprincipal,contactoemergencia,typeuser ,estatus ,id ,descripcionusuario ,rfc, curp,id ).subscribe((data: any)=>{
        if(data == 0){
          //alert("Error al insertar usuario");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al insertar usuario',
           
          })
        }else{
          if(data == 2){
            //alert("Error al insertar informacion");
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al insertar informacion',
             
            })
          }else{
            //alert("Se ha insertado un nuevo usuario");
            this.httpService.EnviarCorreo(email,"Bienvenido a InmobeWise. \n Hola, "+ nombre + " ya puedes usar nuestros servicios. \n Saludos del equipo de InmobeWise.").subscribe((data)=>{
              
            })
            Swal.fire(
              'Exitosamente!',
              'Se ha insertado un nuevo usuario',
              'success'
              
            )
          }
        }
      })

      }
      else{
        // alert("No");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Rellena todos los campos',
         
        })
      }

}

obtenerTipoUsuario(){
  this.httpService.obtenerTipoUser().subscribe((resp:any)=>{
   if(resp !== 201){
    
     this.typeUser = resp[0].Id_Tipo_Usuario;
     this.typeUsers = resp;
   }
  },(err)=>{

  })
 }

}
