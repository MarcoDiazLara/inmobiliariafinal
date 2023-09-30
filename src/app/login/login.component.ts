import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openAgentes(){
   this.router.navigate(["/superUsuario"], { replaceUrl: true });

  }

  openAgentes2(){
    this.router.navigate(["/inmobiliaria"], { replaceUrl: true });
 
   }

   openAgentes3(){
    this.router.navigate(["/usuario"], { replaceUrl: true });
 
   }

   openAgentes4(){
    this.router.navigate(["/asesor"], { replaceUrl: true });
 
   }


}
