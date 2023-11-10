import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desarrollob',
  templateUrl: './desarrollob.component.html',
  styleUrls: ['./desarrollob.component.scss']
})
export class DesarrollobComponent implements OnInit {

  constructor(  private router:Router ) {  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(["/web/blog"]);
  }
}
