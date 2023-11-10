import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recorvirtb',
  templateUrl: './recorvirtb.component.html',
  styleUrls: ['./recorvirtb.component.scss']
})
export class RecorvirtbComponent implements OnInit {

  constructor(  private router:Router ) {  }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(["/web/blog"]);
  }

}
