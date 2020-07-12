import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {}
  ngOnInit() {

  }
  signOut() {
    this.auth.auth
      .signOut()
      .then((res) => this.router.navigate(["/"]))
      .catch(function (error) {
        console.log(error);
      });
  }
}
