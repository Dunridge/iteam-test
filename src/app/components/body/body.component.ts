import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Feedback} from "../../interfaces/feedback.interface";
import {FormField} from "../../interfaces/form-field.interface";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {
  feedback!: Feedback;
  fg!: FormGroup;
  controls: FormField[];

  constructor(private fb: FormBuilder) {
    this.controls = [
      {
        label: 'First name',
        control: 'firstName'
      },
      {
        label: 'Last name',
        control: 'lastName'
      },
      {
        label: 'Date of birth',
        control: 'dateOfBirth'
      },
      {
        label: 'Technology',
        control: 'technology'
      },
      {
        label: 'Version',
        control: 'version'
      },
      {
        label: 'Email',
        control: 'email'
      },
      {
        label: 'Hobby',
        control: 'hobby'
      }
    ];
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.fg = this.fb.group({
      firstName: ['',  Validators.required],
      lastName: ['',  Validators.required],
      dateOfBirth: ['',  Validators.required],
      technology: ['',  Validators.required],
      version: ['',  Validators.required],
      email: ['',  Validators.required],
      hobby: ['',  Validators.required]
    });
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }

  submit(): void {
    this.feedback = this.fg?.value;
    console.log(this.feedback);
    this.fg?.reset();
  }
}
