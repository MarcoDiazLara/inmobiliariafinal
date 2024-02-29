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
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      this.showCookiePopup = true;
    }
  }


  openLogin(){
   
    this.router.navigate(["/login"], { replaceUrl: true });
  }

  showCookiePopup: boolean = false;


  acceptCookies() {
    // Establecer el indicador de aceptación de cookies en localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    this.showCookiePopup = false;
  }
  
  } 











