import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  {
    path: "",
    loadChildren: () =>
      import("./admin/admin.module").then(
        (m) => m.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
