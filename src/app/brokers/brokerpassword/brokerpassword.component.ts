import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-brokerpassword',
  templateUrl: './brokerpassword.component.html',
  styleUrls: ['./brokerpassword.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,ReactiveFormsModule],
})
export class BrokerpasswordComponent implements OnInit {
  formGeneral!:FormGroup;
  loading = false;
  hide = true;
  hide2 = true;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    
  ) { }
  closeDialog() {
    this.dialog.closeAll();
  }



  ngOnInit(): void {
  }

}
