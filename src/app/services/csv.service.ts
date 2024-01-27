import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  generateCSV(data: any[], filename: string): void {
    const csvData = this.convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, filename);
  }

  private convertToCSV(data: any[]): string {
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map(obj => Object.values(obj).join(',') + '\n').join('');
    return header + rows;
  }
}

