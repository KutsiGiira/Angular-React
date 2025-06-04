import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  // form: FormGroup;

  text:string = "This field is required.";
  email:string = "Please enter a valid email address.";
  radio:string = "Please select a query type.";
  check:string = "You must consent to submit the form.";

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     queryType: ['', Validators.required],
  //     message: ['', Validators.required],
  //     consent: [false, Validators.requiredTrue]
  //   });
  // }
  // onSubmit() {
  //   if (this.form.invalid) {
  //     this.form.markAllAsTouched();
  //     return;
  //   }
  //   console.log(this.form.value);
  // }
}
