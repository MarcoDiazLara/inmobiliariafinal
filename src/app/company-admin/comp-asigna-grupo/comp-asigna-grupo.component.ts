import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { informacionA } from 'src/app/services/Interface/Interfaces';
import { AsigarReAsignar } from 'src/app/services/Interface/Interfaces';
import { GlobalService } from 'src/app/services/global/global.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompBrokerComponent } from '../ventanaemergente/comp-broker/comp-broker.component';


@Component({
  selector: 'app-comp-asigna-grupo',
  templateUrl: './comp-asigna-grupo.component.html',
  styleUrls: ['./comp-asigna-grupo.component.scss']
})


export class CompAsignaGrupoComponent implements OnInit {

  usuarios$: any;
  formGeneral!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = [
    'Nombre',
    'Apellido Paterno',
    'Apellido Materno',
    'Supervisor',
    'btOpciones'
  ];

  dataSource = new MatTableDataSource<any>([]);

  columnas: string[] = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Supervisor', 'botonOption'];


  // poner el nombre de una variable
  informacion: informacionA[] = [];
  datosAsesores: AsigarReAsignar[] = [];


  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private httpService: HttpService,
    private adminService: GlobalService
  ) { }



  ngOnInit(): void {


    let Bandera = localStorage.getItem("Bandera")

    if (Bandera == "1") {
      this.obtenerConteo();

      this.usuarios$ = this.adminService.getUsuariosOb().subscribe((usuarios) => {
        if (usuarios !== null) {
          this.dataSource.data = usuarios;
        }
      });

    }

    this.obtenerUsuarios();
    this.dataSource = new MatTableDataSource(this.informacion);

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerConteo() {
    let IdSocio = localStorage.getItem("Id_Socio");
    this.http.Grupos_Asignados(IdSocio).subscribe((data: any) => {
      this.datosAsesores = data;
    });
  }


  obtenerUsuarios() {
    let Id_Socio = localStorage.getItem("Id_Socio");

    this.httpService.mostrarInformacionAsesor(Id_Socio).subscribe((data: any) => {

      if (data !== 201) {
        this.adminService.usuarios$.next(data);
      } else {
        data = [];
        this.adminService.usuarios$.next(data);
      }
    },
      (err) => {
        
      }
    )
  }


  openModalActualizar(element: any) {
    alert("open modal" + element)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }





  openasesor(id_nom: any, respo: any) {

    const valorCelda = respo;

    // Verifica si el valor de la celda está vacío o no
    if (valorCelda !== null) {
      // Almacena el valor en el localStorage
      localStorage.setItem("mi_valor", "1");

    } else {
      localStorage.setItem("mi_valor", "2");

    }

    localStorage.setItem("Agente", id_nom);
    localStorage.setItem("Broker", respo);


    // mandar a llamar ventana emergente

    const dialogRef = this.dialog.open(CompBrokerComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerUsuarios();
    });
  }


  // openDialog(): void {
  //   this.dialog.closeAll();
  //   //this.httpService.setGlobalVariable(false);
  //   const itemsToRemove =[
  //     "id_publicacion",
  //     "mi_valor",
  //     "Asesor",
  //   ];
  //   itemsToRemove.forEach( item => {
  //     localStorage.removeItem(item);
  //   })

  // }

}

















































