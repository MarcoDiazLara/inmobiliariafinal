import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requisitos3d',
  templateUrl: './requisitos3d.component.html',
  styleUrls: ['./requisitos3d.component.scss']
})
export class Requisitos3dComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrarTabla = false;
  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }

}
