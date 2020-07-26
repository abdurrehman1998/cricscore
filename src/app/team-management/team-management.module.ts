import { NgModule } from '@angular/core';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { TeamComponent } from './team.component';


@NgModule({
  imports: [
    TeamManagementRoutingModule,
    SharedModule

  ],
  declarations: [AddTeamComponent, TeamComponent],

})
export class TeamManagementModule { }
