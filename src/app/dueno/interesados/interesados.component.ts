import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interesados',
  templateUrl: './interesados.component.html',
  styleUrls: ['./interesados.component.scss']
})
export class InteresadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  desplazar() {
    this.router.navigate(['Dueno/datos-interesados'])
  }


}
