import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: "Auth",
    loadChildren: "./home/authentification/authentification.module#AuthentificationModule"
  },
  {
    path: "webcam",
    loadChildren: "./home/content/content.module#ContentModule"
  },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),

  ],
  declarations: [HomeComponent]
})
export class AppRoutingModule { }
