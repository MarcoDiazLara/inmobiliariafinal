import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planbb',
  templateUrl: './planbb.component.html',
  styleUrls: ['./planbb.component.scss']
})
export class PlanbbComponent implements OnInit {

  constructor(  private router:Router ) {  }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(["/web/blog"]);
  }

}
