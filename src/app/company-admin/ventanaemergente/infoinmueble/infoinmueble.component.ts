import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Inmuebles,Estados,Municipios,Asentamiento } from 'src/app/services/Interface/Interfaces';


@Component({
  selector: 'app-infoinmueble',
  templateUrl: './infoinmueble.component.html',
  styleUrls: ['./infoinmueble.component.scss']
})
export class InfoinmuebleComponent implements OnInit {
  generatedCode: string = '';


  constructor() { }

  ngOnInit(): void {
  }
  generateRandomCode() {
    // Generar un código aleatorio (puedes personalizar la lógica según tus necesidades)
    this.generatedCode = this.getRandomCode();
  }
  private getRandomCode(): string {
    // Lógica para generar códigos aleatorios, por ejemplo, usando números y letras
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 8;
    let randomCode = '';

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }

    return randomCode;
  }

}
