import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private router: Router,
    private httpService: HttpService,
    private formBuilder: FormBuilder){}


    ngOnInit() {
      this.formLogin = this.formBuilder.group({
        nombreU: ['',[Validators.required]],
        password: ['',[Validators.required]]
       })
     }

     

login(){
  this.httpService.iniciarSesion(this.formLogin.value.nombreU,this.formLogin.value.password).subscribe((data: any)=> {
    if(data== 0){
      alert("usuario no existe");
    }else{
      if(data==2){
        alert("contraseña incorrecta");
      }else{
       this.router.navigate(["/menu2"]);

      }
    }
  });
}

registro(){
  this.router.navigate(["/registro"]);
}

 



}
