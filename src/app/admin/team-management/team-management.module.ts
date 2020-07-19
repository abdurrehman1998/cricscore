import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AddTeamComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeamManagementRoutingModule,

  ]
})
export class TeamManagementModule { }
