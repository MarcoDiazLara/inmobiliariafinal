import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plubib',
  templateUrl: './plubib.component.html',
  styleUrls: ['./plubib.component.scss']
})
export class PlubibComponent implements OnInit {

  constructor(  private router:Router ) {  }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(["/web/blog"]);
  }
}
