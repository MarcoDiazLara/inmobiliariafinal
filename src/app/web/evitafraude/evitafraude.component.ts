import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evitafraude',
  templateUrl: './evitafraude.component.html',
  styleUrls: ['./evitafraude.component.scss']
})
export class EvitafraudeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  Index() {
    this.router.navigate(["/web"]);
  }

}
