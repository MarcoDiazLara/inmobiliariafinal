import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quieresvender',
  templateUrl: './quieresvender.component.html',
  styleUrls: ['./quieresvender.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
  ],
})
export class QuieresvenderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Index() {
    this.router.navigate(["/web"]);
  }

}
