import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-fecha-hito-agentes',
  templateUrl: './fecha-hito-agentes.component.html',
  styleUrls: ['./fecha-hito-agentes.component.scss']
})
export class FechaHitoAgentesComponent implements OnInit {
  selected: Date = new Date(); 
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
