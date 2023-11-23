import { Component,  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';



@Component({
  selector: 'app-likegrafica',
  templateUrl: './likegrafica.component.html',
  styleUrls: ['./likegrafica.component.scss']
})
export class LikegraficaComponent  {

  constructor(private httpService: HttpService,
    public dialogRef: MatDialogRef<LikegraficaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
   NumLikes:any;  
  ngOnInit(){
   this.httpService.mostrarlikes(localStorage.getItem("p_Id_inmueble"),localStorage.getItem("p_fecha")).subscribe((data:any)=>{
    this.NumLikes=data[0]["COUNT(*)"];
    // console.log(this.NumLikes);
    // console.log(data.COUNT);
   })


  }



}
