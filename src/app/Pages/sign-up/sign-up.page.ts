import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private singUpForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  public onSubmit() {
    console.table(this.singUpForm.value);
    this.alertService.alert('Accout created successfully!');
  }

  // private methods start
  private initializeForm() {
    this.singUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [''],
      password: ['', Validators.required]
    });
  }
}
