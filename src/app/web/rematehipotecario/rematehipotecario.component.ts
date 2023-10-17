import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-rematehipotecario',
  templateUrl: './rematehipotecario.component.html',
  styleUrls: ['./rematehipotecario.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule
  ],
})
export class RematehipotecarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // back() {
  //   this.router.navigate(["/web"]);
  // }

}
