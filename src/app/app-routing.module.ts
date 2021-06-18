import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path:"", redirectTo:'/home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"reactive-form", component:ReactiveFormComponent},
  {path:"template-form", component:TemplateFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
