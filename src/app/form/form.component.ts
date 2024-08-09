import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  name = new FormControl('');
  myForm: FormGroup | undefined;

  ngOnInit() {
    this.myForm = new FormGroup({
      myControl: new FormControl(''),
    });
  }
}
