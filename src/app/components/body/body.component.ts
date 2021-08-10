import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Feedback} from "../../interfaces/feedback.interface";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  feedback!: Feedback;
  fg!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.fg = this.fb.group({
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      technology: '',
      version: '',
      email: '',
      hobby: ''
    });
  }

  submit(): void {
    this.feedback = this.fg?.value;
    console.log(this.feedback);
    this.fg?.reset();
  }
}
