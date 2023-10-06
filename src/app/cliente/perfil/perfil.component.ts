import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormGroup, } from '@angular/forms';
import {MatDialog, MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PasswordComponent } from '../ventanaemergente/password/password.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatSelectModule, 
    FormsModule,
    ReactiveFormsModule, 
    NgFor,
    NgIf, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
  
    
  ],
})


export class PerfilComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }

  // Apartado Dialog Pantalla Emergente 
  

  constructor(public dialog: MatDialog) {}

  
  openpassword (){
    


    const dialogRef = this.dialog.open(PasswordComponent,{
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }



  openDialog(): void {
    
  }

 
}





