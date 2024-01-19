import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MetododepagoComponent } from 'src/app/metododepago/metododepago.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmobiliariacorredor',
  templateUrl: './inmobiliariacorredor.component.html',
  styleUrls: ['./inmobiliariacorredor.component.css']
})
export class InmobiliariacorredorComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private dialog: MatDialog , private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.httpService.getGlobalVariable();
  }
  openDialog(bandera:number): void {
    if(this.isLoggedIn){

    
      let auxi=bandera.toString();
      localStorage.setItem("tipodeplan",auxi);

    const dialogRef = this.dialog.open(MetododepagoComponent, {
    });
  }else{
    this.router.navigate(['web/contacto']);
  }
   
}
}
