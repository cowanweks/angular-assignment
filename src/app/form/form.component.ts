import { NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
})
export class FormComponent {
  feedbackForm: FormGroup;

  constructor() {
    this.feedbackForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      feedback: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      // console.log('Form Submitted:', this.feedbackForm.value);
      alert('Thank you for your FeedBack');
    } else {
      alert('Form is invalid');
      this.feedbackForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
    }
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get feedback() {
    return this.feedbackForm.get('feedback');
  }
}
