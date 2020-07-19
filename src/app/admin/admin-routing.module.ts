import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard],
    children:[
      {
        path: "teams",
        loadChildren: () =>
          import("./team-management/team-management.module").then(
            (m) => m.TeamManagementModule
          ),
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
