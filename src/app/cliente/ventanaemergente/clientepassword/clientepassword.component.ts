import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-clientepassword',
  templateUrl: './clientepassword.component.html',
  styleUrls: ['./clientepassword.component.scss']
})
export class ClientepasswordComponent implements OnInit {

  
  formGeneral!:FormGroup;
  loading = false;
  hide = true;
  hide2 = true;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {

    this.formGeneral = this.formBuilder.group({
      password: ['',  [Validators.required]],
      password2: ['', [Validators.required]]
    });

  }

  closeDialog() {
    this.dialog.closeAll();
  }
  actualizarpassword(){
   if (this.formGeneral){
    let contrasena = this.formGeneral.value.password;
    let contrasena2 = this.formGeneral.value.password2;
    let Id_Usuario = localStorage.getItem("Id_Usuario");
  
    
    if(contrasena == contrasena2){
      this.httpService.cambiarContra(Id_Usuario,contrasena).subscribe(()=>{ alert("Se ha cambiado la contraseña");});
      
      this.closeDialog();
    }
    else{
      alert("Las contraseñas no son iguales")
    }
   }
  }


}

