import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-ventanas-emergentes',
  templateUrl: './ventanas-emergentes.component.html',
  styleUrls: ['./ventanas-emergentes.component.scss']
})
export class VentanasEmergentesComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
