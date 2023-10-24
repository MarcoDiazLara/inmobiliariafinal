import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-asignasrasesor',
  templateUrl: './asignasrasesor.component.html',
  styleUrls: ['./asignasrasesor.component.scss']
})
export class AsignasrasesorComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;


  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  guardarasesor() {}

  closeDialog() {
    this.dialog.closeAll();
  }

}
