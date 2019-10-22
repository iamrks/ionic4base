import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private menuCtrl: MenuController) { }

  // Life Cycle hooks start
  ngOnInit() {
    this.initializeForm();
  }

  async ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // public methods start
  async onSubmit() {
    try {
      await this.authService.login(this.login.value);
      this.menuCtrl.enable(true);
      this.router.navigateByUrl('/home');
    } catch(err) {
      this.alertService.alert(err.message);
    }
  }

  // private methods start
  private initializeForm() {
    this.login = this.formBuilder.group({
      username: ['TricityA103', Validators.required],
      password: ['123456', Validators.required]
    });
  }
}
