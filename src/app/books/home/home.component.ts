import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rowData: any[] = [
    { make: 'Toyota', model: 'etios', price: 5000 },
    { make: 'Hyundai', model: 'i20', price: 6000 },
    { make: 'Maruti', model: 'baleno', price: 4000 },
  ];

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];
}
