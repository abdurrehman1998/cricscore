import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, fromEvent, merge } from "rxjs";
import { GenericValidator } from "../shared/generic-validator";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: "app-sign-in",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  signInFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    private router: Router
  ) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      email: {
        required: "Email is required.",
        email: "Not an email",
      },
      password: {
        required: "Password is required.",
        minlength: "Password must be at least 6 characters.",
      },
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.signInFormGroup = this.fb.group({
      email: ["abdur4082@gmail.com", [Validators.required, Validators.email]],
      password: ["mann1998", [Validators.required, Validators.minLength(6)]],
    });
  }
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<
      any
    >[] = this.formInputElements.map((formControl: ElementRef) =>
      fromEvent(formControl.nativeElement, "blur")
    );

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.signInFormGroup.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.displayMessage = this.genericValidator.processMessages(
          this.signInFormGroup
        );
      });
  }
  onSubmit() {
    const { email, password } = this.signInFormGroup.value;
    this.auth.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => this.router.navigate([""]))
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
