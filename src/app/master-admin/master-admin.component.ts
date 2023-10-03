import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AltaBrokersComponent } from './modals/alta-brokers/alta-brokers.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-master-admin',
  templateUrl: './master-admin.component.html',
  styleUrls: ['./master-admin.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
     MatSelectModule, 
  ],
  
     
})


export class MasterAdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openMasterAdmin(){
    ////console.log("idBodegaCat: "+idBodegaCat+" categoria: "+categoria+" status: "+status);
    const dialogRef = this.dialog.open(AltaBrokersComponent,{
      // data:{},
      width: '60vh',
      height: 'auto',
      // disableClose: true
    });
  }

}
