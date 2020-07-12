import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-sign-in",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  constructor(private fb: FormBuilder, public auth: AngularFireAuth,private router:Router) {}
  signInFormGroup: FormGroup;
  ngOnInit() {
    this.signInFormGroup = this.fb.group({
      email: ["abdur4082@gmail.com"],
      password: ["mann1998"],
    });
  }
  onSubmit() {
    const { email, password } = this.signInFormGroup.value;
    this.auth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res=>this.router.navigate(['home']))
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
}
