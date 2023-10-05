import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  isLoggedIn: boolean = false;
  

  Login(){
    
    this.router.navigate(['/login']);

 }

 cerrar(){
  //this.httpService.setGlobalVariable(false);
  this.httpService.cerrarSesion().subscribe((resp: any)=>{},(err)=>{
    console.log(err);
   
  });

 }


 constructor(private router: Router,private httpService: HttpService){
 
  }

  ngOnInit() {
    this.isLoggedIn = this.httpService.getGlobalVariable();
  }

}
