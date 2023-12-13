import { Component, OnInit, HostListener } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http/http.service';





@Component({
  selector: 'app-brokerhito',
  templateUrl: './brokerhito.component.html',
  styleUrls: ['./brokerhito.component.scss']
})



export class BrokerhitoComponent implements OnInit {
  ShowAddEvent: boolean = false;
  asunto: string = '';
  fechaInicio: any;
  fechaCierre: any;
  Descripcion: string = '';


  addEvent() {
    this.ShowAddEvent = true;
    setTimeout(() => {
      const modal = document.querySelector('.ShowAddEvent');
      if (modal) {
        modal.classList.add('mostrar');
      }
    }, 50);
  }
  closeEvent(){
    const modal = document.querySelector('.ShowAddEvent');
  if (modal) {
    modal.classList.remove('mostrar');
    setTimeout(() => {
      this.ShowAddEvent = false;
    }, 100);
   }  
  }
Addnew() {
   
  }







  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
  }

}
