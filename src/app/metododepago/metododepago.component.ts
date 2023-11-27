import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-metododepago',
  templateUrl: './metododepago.component.html',
  styleUrls: ['./metododepago.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class MetododepagoComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder,private dialog: MatDialog) { }
     
     plan!:string|null;
     nombreplan!:string;
     precio!:string;

  ngOnInit(): void {
    this.plan=localStorage.getItem("tipodeplan");
    if(this.plan=="1"){
      this.nombreplan="Plan Basico";
      this.precio="$999.00"
    }
     if(this.plan=="2"){
      this.nombreplan="Plan Intermedio";
      this.precio="$1499.00"
     }
     else{
      if(this.plan=="3"){
        this.nombreplan="Plan premiums";
        this.precio="$2999.00"

      }
     }
  }
  mostrarAlerta() {
    Swal.fire(
      'Exitosamente!',
      'Se ha registrado tu compra en el sistema ',
      'success'
      
    )
  }

  CerraDialogo(){
    this.dialog.closeAll();
 
    }


 
}
