import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // this.embedPowerBIReport();
  }
  // embedPowerBIReport() {
    
  //   const embedConfig: pbi.IEmbedConfiguration = {
  //     type: 'report',
  //     id: 'bbab5c2d-b0c4-415f-9945-7e10c5dc3026',  // Reemplaza con el ID de tu informe de Power BI
  //     embedUrl: 'https://app.powerbi.com/groups/me/reports/bbab5c2d-b0c4-415f-9945-7e10c5dc3026/ReportSection?redirectedFromSignup=1&experience=power-bi',  // Reemplaza con la URL de incorporación de tu informe de Power BI
  //     accessToken: 'TU_TOKEN',  // Reemplaza con tu token de acceso de Power BI
  //     tokenType: pbi.models.TokenType.Embed,
  //     settings: {
  //       filterPaneEnabled: false,
  //       navContentPaneEnabled: true
  //     }
  //   };

  //   const reportContainer = document.getElementById('reportContainer'); 
  //   const report = powerbi.embed(reportContainer, embedConfig);
  // }

}
