import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { WebModule } from 'src/app/web/web.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  standalone: true,
  imports:[
    BrowserModule,
    BrowserAnimationsModule, // Importa BrowserAnimationsModule para que las animaciones de Angular Material funcionen
    MatListModule,  // Importa MatListModule para usar <mat-list-item> y <mat-list>
    MatTabsModule,  
    WebModule,
  ],
  
})
export class DetallesComponent implements OnInit {
  imagenesCarrusel: string[] = [
    'assets/img/alquilar.jpg',
    'assets/img/contratos.jpeg',
    'assets/img/departamento-pequeno.jpg',
    'assets/img/deposito.jpg',
    'assets/img/Slide-1.jpg',
    'assets/img/Slide-3.jpg',
  ];

  

  imagenPrincipalUrl: string = 'assets/img/Houses-bro.png';

  cambiarImagen(imagenUrl: string) {
    this.imagenPrincipalUrl = imagenUrl;
  }
  



  constructor( private router:Router) { }
  
  back(){
    this.router.navigate(["/inmueble/vista"]);
  }

  ngOnInit(): void {
    const shareButton = document.querySelectorAll<HTMLButtonElement>("button.shareButton");

    shareButton[0].addEventListener("click", (e) => {
      for (let i = 0; i < shareButton.length; i++) {
        shareButton[i].classList.toggle("open");
        shareButton[0].classList.remove("sent");
      }
    });

    for (let i = 1; i < shareButton.length; i++) {
      shareButton[i].addEventListener("click", (e) => {
        for (let i = 0; i < shareButton.length; i++) {
          shareButton[i].classList.toggle("open");
        }
        shareButton[0].classList.toggle("sent");
      });
    }


    

  }

  

}




