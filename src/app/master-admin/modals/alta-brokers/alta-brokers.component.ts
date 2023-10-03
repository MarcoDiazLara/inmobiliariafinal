import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import {FormControl} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';



@Component({
  selector: 'app-alta-brokers',
  templateUrl: './alta-brokers.component.html',
  styleUrls: ['./alta-brokers.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgFor,
    NgIf,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule
  ],
    

})



export class AltaBrokersComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() { }

  ngOnInit(): void {
  }



}
