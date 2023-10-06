import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  
})
export class DetallesComponent implements OnInit {

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




