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

  ngOnInit(): void {
  }
  mostrarAlerta() {
    Swal.fire(
      'Exitosamente!',
      'Se ha registrado una cita en el sistema',
      'success'
      
    )
  }

  CerraDialogo(){
    this.dialog.closeAll();
 
    }
 
}
