import { Component,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-likegrafica',
  templateUrl: './likegrafica.component.html',
  styleUrls: ['./likegrafica.component.scss']
})
export class LikegraficaComponent  {

  constructor(
    public dialogRef: MatDialogRef<LikegraficaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
     
  


}
