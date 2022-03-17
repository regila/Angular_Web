import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { DisplayBooksComponent } from './display-books/display-books.component';

const routes: Routes = [
  {path: '' , component: AuthorComponent},
  {path:'displaybooks', component:DisplayBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
