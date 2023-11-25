import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MetododepagoComponent } from 'src/app/metododepago/metododepago.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inmobiliariacorredor',
  templateUrl: './inmobiliariacorredor.component.html',
  styleUrls: ['./inmobiliariacorredor.component.css']
})
export class InmobiliariacorredorComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MetododepagoComponent, {
  
    });

}
}
