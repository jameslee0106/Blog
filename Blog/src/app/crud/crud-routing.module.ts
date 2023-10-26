import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'blog-list', pathMatch: 'full'},
  {path: 'blog-list', component: BlogListComponent}, 
  {path: 'create-blog', component: BlogFormComponent},
  {path: 'update-blog/:blogId', component: BlogFormComponent},
  {path: 'view-blog-details/:blogId', component: BlogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
