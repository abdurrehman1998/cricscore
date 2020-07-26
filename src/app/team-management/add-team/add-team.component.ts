import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GenericValidator } from 'app/shared/generic-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  addTeamFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    private router: Router,
    private translate:TranslateService
  ) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      teamName: {
        required: 'TEAM_NAME_REQ'
      },
      format: {
        required: 'TEAM_FORMATS_REQ'
      },
      city: {
        required: 'TEAM_CITY_REQ'
      },
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages,this.translate);
  }

  ngOnInit() {
    this.addTeamFormGroup = this.fb.group({
      teamName: ["", [Validators.required, Validators.minLength(6)]],
      format:[[1],[Validators.required]],
      city:[1,[Validators.required]]
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
    merge(this.addTeamFormGroup.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.displayMessage = this.genericValidator.processMessages(
          this.addTeamFormGroup
        );
      });
  }
  onSubmit() {
    const { email, password } = this.addTeamFormGroup.value;
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
