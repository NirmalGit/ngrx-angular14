import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AgGridModule, BooksRoutingModule],
})
export class BooksModule {}
