import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quierescomprar',
  templateUrl: './quierescomprar.component.html',
  styleUrls: ['./quierescomprar.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule
  ],
})
export class QuierescomprarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Index() {
    this.router.navigate(["/web"]);
  }

}
