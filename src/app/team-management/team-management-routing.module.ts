import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamComponent } from './team.component';



const routes: Routes = [
  {
    path: "",
    component: TeamComponent,
    children: [
      { path: "", component: AddTeamComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule { }
