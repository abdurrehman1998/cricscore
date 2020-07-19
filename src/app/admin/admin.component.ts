import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {}
  ngOnInit() {

  }
  signOut() {
    this.auth.auth
      .signOut()
      .then((res) => this.router.navigate(["/welcome"]))
      .catch(function (error) {
        console.log(error);
      });
  }

}
