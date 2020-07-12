import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "home", component: HomeComponent,canActivate: [AngularFireAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
