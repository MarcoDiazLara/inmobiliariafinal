import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebModule } from '../web.module';


@Component({
  selector: 'app-rematehipotecario',
  templateUrl: './rematehipotecario.component.html',
  styleUrls: ['./rematehipotecario.component.scss'],
  

})
export class RematehipotecarioComponent implements OnInit {

  constructor(
    private router: Router
  
  ) { }

  ngOnInit(): void {
    
  }
  
  Index() {
    this.router.navigate(["web"]);
  }
 

}
