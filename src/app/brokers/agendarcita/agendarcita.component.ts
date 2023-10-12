import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-agendarcita',
  templateUrl: './agendarcita.component.html',
  styleUrls: ['./agendarcita.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule, MatDialogModule,MatNativeDateModule,MatDatepickerModule ]
})
export class AgendarcitaComponent implements OnInit {
  formCita!: FormGroup;
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit(): void {
  }

}
