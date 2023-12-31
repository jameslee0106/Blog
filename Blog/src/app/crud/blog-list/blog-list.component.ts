import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price'}
  ]

  rowData = [
    {make: 'Toyota', model:'Celica', price: 35000},
    {make: 'Ford', model:'Mondeo', price: 32000},
    {make: 'Porsche', model:'Boxter', price: 72000}
  ]

  constructor() {}

  ngOnInit(): void {}
}
