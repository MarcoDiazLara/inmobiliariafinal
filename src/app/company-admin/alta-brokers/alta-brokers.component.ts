import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alta-brokers',
  templateUrl: './alta-brokers.component.html',
  styleUrls: ['./alta-brokers.component.scss']

})
export class AltaBrokersComponent implements OnInit {

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

}
