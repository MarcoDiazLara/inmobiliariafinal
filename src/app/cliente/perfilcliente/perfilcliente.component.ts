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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ClientepasswordComponent } from '../ventanaemergente/clientepassword/clientepassword.component'
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';


@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.component.html',
  styleUrls: ['./perfilcliente.component.scss'],
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
export class PerfilclienteComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  formGeneral!: FormGroup;
  loading = false;
  hide2 = true;

  datos!: infoUsuario;
  datos2!: infoUsuario;

  constructor(public dialog: MatDialog,

    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,

  ) { }

  ngOnInit(): void {

    this.obtenerInfo();
    this.formGeneral = this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellidopaterno:['',[Validators.required]],
      apellidomaterno:['',[Validators.required]],
      curp:['',[Validators.required]],
      rfc:['',[Validators.required]],
      contactoprincipal:['',[Validators.required]],
      contactoemergencia:['',[Validators.required]],
      email:['',[Validators.required]],
      nombreusuario:['',[Validators.required]],
      imageInput:['',[Validators.required]],
    });
  }

  // Apartado Dialog Pantalla Emergente 

  openpassword() {

    const dialogRef = this.dialog.open(ClientepasswordComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }

  openDialog(): void {

  }

  
  Guardardatos() {


    if (this.formGeneral) {
      let id = localStorage.getItem("Id_Usuario");
      let nombre = this.formGeneral.value.nombre;
      let apellidopaterno = this.formGeneral.value.apellidopaterno;
      let apellidomaterno = this.formGeneral.value.apellidomaterno;
      let curp = this.formGeneral.value.curp;
      let rfc = this.formGeneral.value.rfc;
      let contactoprincipal = this.formGeneral.value.contactoprincipal;
      let contactoemergencia = this.formGeneral.value.contactoemergencia;
      let email = this.formGeneral.value.email;
      let nombreusuario = localStorage.getItem("Id_Usuario");
      let imageInput = this.formGeneral.value.imageInput;
  //id , nombre , apellidopaterno , apellidomaterno , curp , rfc ,  contactoprincipal , contactoemergencia ,  email ,  nombreusuario , imageInput
      this.httpService.updateInfoUsuario(id , nombre , apellidopaterno , apellidomaterno , curp , rfc ,  contactoprincipal , contactoemergencia ,  email ,  nombreusuario ).subscribe((data : any)=>{
        if(data ==1){
          alert("Se actualizo usuario");
        }else{
          alert("Error al actualizar");
        }
      })

    }
  }

  obtenerInfo(){
    this.httpService.obtenerInfoUsuario(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>
    {if(data ==201){
      alert("Error al leer usuario");
    }else{
    
      this.datos = data;
      this.obtenerInfo2();
    }})
  }
  obtenerInfo2(){
    this.httpService.obtenerInfoUsuario2(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>
    {if(data ==201){
      alert("Error al leer usuario");
    }else{
      
      this.datos.Nombre_Usuario = data.Nombre_Usuario;
      this.datos.Img_Profile = data.Img_Profile;
    }})
  }
   
  


 
}
