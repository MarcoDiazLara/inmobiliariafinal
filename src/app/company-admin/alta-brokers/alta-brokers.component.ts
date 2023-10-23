import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



interface Status {
  value: string;
  viewValue: string;
}

interface Tipo{
  value: string;
  viewValue: string;
};


//broker,asesor
@Component({
  selector: 'app-alta-brokers',
  templateUrl: './alta-brokers.component.html',
  styleUrls: ['./alta-brokers.component.scss']

})
export class AltaBrokersComponent implements OnInit {

  estados: Status[] = [
    {value: 'Activo', viewValue: 'Activo'},
    {value: 'Inactivo', viewValue: 'Inactivo'},
  ];

  tipos: Tipo[] = [
    {value: '2', viewValue: 'Broker'},
    {value: '3', viewValue: 'Asesor'},
  ];

  toppings = new FormControl('');
 
   
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
      seleccionausuario:  ['', [Validators.required]],
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
      let contra = this.formGeneral.value.password;
      let id = localStorage.getItem("Id_Usuario");
      let typeuser = this.formGeneral.value.seleccionausuario;


      //alert('nombre: '+ nombre + 'apellidopaterno: ' + apellidopaterno + 'apellidomaterno: '+ apellidomaterno + 'curp: ' + curp + 'rfc: '+ rfc + 'contactoprincipal: ' + contactoprincipal + 'contactoemergencia: '+ contactoemergencia + 'email: ' + email + 'nombreusuario' + nombreusuario + 'estatus' + estatus + 'descripcionusuario'+ descripcionusuario + 'imageInput' + imageInput); 
      
      this.httpService.registroCompletoBroker(nombre,apellidopaterno,apellidomaterno,nombreusuario,contra
        ,email,contactoprincipal,contactoemergencia,typeuser ,estatus ,id ,descripcionusuario ,rfc, curp,id ).subscribe((data: any)=>{
        if(data == 0){
          alert("Error al insertar usuario");
        }else{
          if(data == 2){
            alert("Error al insertar informacion");
          }else{
            alert("Se ha insertado un nuevo usuario");
          }
        }
      })

     }
}

}
