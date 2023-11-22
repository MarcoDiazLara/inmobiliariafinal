import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LikeComponent } from '../like/like.component';
import { MenuinmuebleComponent } from '../menuinmueble/menuinmueble.component';
import { InformacioninmuebleComponent } from '../informacioninmueble/informacioninmueble.component';
import {ThemePalette} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
  
  // standalone: true,
  // imports: [MatButtonModule, MatDialogModule, MenuinmuebleComponent],
})
export class AvisosComponent  {
  opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
  opcionSeleccionada: string = '';
  isChecked: boolean = false;

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
 
  constructor(public dialog: MatDialog,private _formBuilder: FormBuilder) {}
  openDialog() {
    const dialogRef = this.dialog.open(LikeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  InforInmu(){

    const dialogRef = this.dialog.open(InformacioninmuebleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }


  
  mostrarTabla = false;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }
    
  mostrarFormulario = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }



}
