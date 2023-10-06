import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-particula',
  templateUrl: './particula.component.html',
  styleUrls: ['./particula.component.css']
})
export class ParticulaComponent implements OnInit {
  
  isLogggedIn: boolean = this.httpService.getGlobalVariable();
  constructor(private router: Router,private httpService: HttpService) { }

  direccionamiento(){
    if(this.isLogggedIn){
      this.router.navigate(["/inmueble/inmueble"])
    }
    else{
      this.router.navigate(["/login"])
    }
  }


  ngOnInit() {

  }

}
