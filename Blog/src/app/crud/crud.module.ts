import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogFormComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule
  ]
})
export class CRUDModule { }
