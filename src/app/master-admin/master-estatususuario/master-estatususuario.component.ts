import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { tblUsers } from 'src/app/services/Interface/Interfaces';
import { MasterestatusComponent } from '../ventanaemergente/masterestatus/masterestatus.component';


@Component({
  selector: 'app-master-estatususuario',
  templateUrl: './master-estatususuario.component.html',
  styleUrls: ['./master-estatususuario.component.scss']
})


export class MasterEstatususuarioComponent implements OnInit {
  pantallausuarios$: any;
  formGeneral!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [
    'Nombre_Usuario',
    'Tipo_Usuario',
    'Estatus',
  
  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre_Usuario', 'Tipo_Usuario', 'Estatus', 'botonOption'];



  // poner el nombre de una variable
  datosinventario: tblUsers[] = [];


  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private httpService: HttpService,
    private adminService: GlobalService,
    private formBuilder: FormBuilder,
    private router: Router
    // Http para jalar el servicio 
  ) { }


  ngOnInit(): void {

    this.pantallausuarios$ = this.adminService.getpantallausuariosOb().subscribe((pantallausuarios) => {
      if (pantallausuarios !== null) {
        this.dataSource.data = pantallausuarios;
      }
    });

    this.obtenerInventario();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerInventario() {

    //  Llamas tu procedimiento 
    this.httpService.estatusUsuario().subscribe((data: any) => {
      
      if (data !== 201) {
        this.adminService.pantallausuarios$.next(data);

        ;
      } else {
        data = [];
        this.adminService.pantallausuarios$.next(data);

      }
    },
      (err) => {
        

      }
    )
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  // mandar a llamar ventana emergente

  openasesor(idPubli: any) {

    localStorage.setItem('Id_Usuxd', idPubli);
    const dialogRef = this.dialog.open(MasterestatusComponent, {
      width: '300px',
      height: '200px',
      disableClose: true

    });
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerInventario();
      });
  }

  openDialog(): void {
    this.dialog.closeAll();
    const itemsToRemove = [
      "id_publicacion",
      "mi_valor",
      "Asesor",
    ];
    itemsToRemove.forEach(item => {
      localStorage.removeItem(item);
    })

  }
}
