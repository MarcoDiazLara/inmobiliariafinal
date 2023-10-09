import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-agentepassword',
  templateUrl: './agentepassword.component.html',
  styleUrls: ['./agentepassword.component.scss']
})

export class AgentepasswordComponent implements OnInit {

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
    alert('password: '+ contrasena + 'password2: ' + contrasena2); 
    
    if(contrasena == contrasena2){
      alert("Son iguales los password")  
    }
    else{
      alert("Las contraseñas no son iguales")
    }
   }
  }

}
