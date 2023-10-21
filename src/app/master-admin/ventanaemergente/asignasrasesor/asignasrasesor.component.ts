import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';



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


  constructor() { }

  ngOnInit(): void {
  }

}
