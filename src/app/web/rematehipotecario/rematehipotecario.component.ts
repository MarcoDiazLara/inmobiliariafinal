import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  
  ) { }

  ngOnInit(): void {
    
  }
  
  Index() {
    this.router.navigate(["/web"]);
  }
 

}
