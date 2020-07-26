import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {WelcomeComponent} from './welcome/welcome.component'
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
const routes: Routes =[
  
  {
    path: '',
    pathMatch: "full",
    component:WelcomeComponent
  },
  {
    path: '',
    canActivate: [AngularFireAuthGuard],
    component:AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
