import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sepomex',
  templateUrl: './sepomex.component.html',
  styleUrls: ['./sepomex.component.scss']
})
export class SepomexComponent implements OnInit {
  panelOpenState = false;
  fileError = false;
  showProgressBar = false;
  progressValue = 0;

  
  processFile(event: any): void {

    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file && file.name.endsWith('.txt')) {
      this.fileError = false;
      this.showProgressBar = true;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        const fileContent = e.target.result;
        const modifiedContent = this.eliminarrenglones(fileContent);

        console.log(modifiedContent);


        this.updateProgressBar(100);
        setTimeout(() => {
          this.showProgressBar = false;
          this.progressValue = 0;
        }, 1000);
      };

      reader.readAsText(file);
    } else {
      this.fileError = true;
      this.showProgressBar = false;
      this.progressValue = 0;
      fileInput.value = '';
    }
  }

  eliminarrenglones(fileContent: string): string {
    const lines = fileContent.split('\n');
    lines.splice(0, 1); 
    return lines.join('\n');
  }

  updateProgressBar(value: number): void {
    this.progressValue = value;
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  
  handleDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  
    const files = event.dataTransfer?.files;
  
    if (files && files.length > 0) {
      const customChangeEvent = { target: { files: files } } as any; 
      this.processFile(customChangeEvent);
    } else {
      console.log("Algo salió mal");
    }
  }
  



  constructor() { }

  ngOnInit(): void {
    
  }

}
