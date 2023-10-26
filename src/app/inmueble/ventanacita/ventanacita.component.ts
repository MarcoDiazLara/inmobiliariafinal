import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, Validators,  ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { HttpService } from 'src/app/services/http/http.service';
import { medioC } from 'src/app/services/Interface/Interfaces';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ventanacita',
  templateUrl: './ventanacita.component.html',
  styleUrls: ['./ventanacita.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    NgFor

    
  ]

})
export class VentanacitaComponent implements OnInit {
  medioC:medioC[]=[

  ]
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  

  constructor(
    public dialogRef: MatDialogRef<VentanacitaComponent> ,
    private _formBuilder: FormBuilder,private httpService:HttpService
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.httpService.mostrarContacto().subscribe((data:any)=>{
      this.medioC=data;
    })
  }

}
