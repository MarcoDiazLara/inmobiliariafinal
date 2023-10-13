import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-seguimientocliente',
  templateUrl: './seguimientocliente.component.html',
  styleUrls: ['./seguimientocliente.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule
  ],
})

export class SeguimientoclienteComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
