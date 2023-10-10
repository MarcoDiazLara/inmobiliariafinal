import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { BrokerpasswordComponent } from '../brokerpassword/brokerpassword.component';



@Component({
  selector: 'app-perfilbrokers',
  templateUrl: './perfilbrokers.component.html',
  styleUrls: ['./perfilbrokers.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule, MatDialogModule ]
})
export class PerfilbrokersComponent implements OnInit {
  
  
  formPerfil!: FormGroup;
  constructor(public dialog: MatDialog) {}
  openpassword (){
    
    const dialogRef = this.dialog.open(BrokerpasswordComponent,{
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }
  
  openDialog(): void {
    
  }
 

  ngOnInit(): void {
  }

}
