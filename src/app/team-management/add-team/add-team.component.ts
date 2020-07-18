import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
addTeamFormGroup:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.addTeamFormGroup=this.fb.group({
      name:["",[Validators.required,Validators.minLength(25)]]
    })
  }

}
