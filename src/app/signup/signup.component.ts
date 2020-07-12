import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-sign-up",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder, public auth: AngularFireAuth) {}
  signUpFormGroup: FormGroup;
  ngOnInit() {
    this.signUpFormGroup = this.fb.group({
      email: [""],
      password: [""],
    });
  }
  onSubmit() {
    const { email, password } = this.signUpFormGroup.value;
    this.auth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
}
