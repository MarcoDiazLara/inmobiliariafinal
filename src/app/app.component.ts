import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inmobewise';
 
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: any): void {
    // Código para eliminar datos del localStorage
    localStorage.clear(); // Esto borrará todos los datos del localStorage
  }

  
}
