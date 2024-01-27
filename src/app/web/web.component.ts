import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';


@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  
 
  constructor (
    private router:Router, 
  ) { }

  ngOnInit(): void {
  }


  openLogin(){
   
    this.router.navigate(["/login"], { replaceUrl: true });
  }
  
  } 











