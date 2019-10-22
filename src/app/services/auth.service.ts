import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  public token: string;
  public isAuthenticated: boolean;

  constructor(
    private apiService: ApiService,
    private storage: Storage,
    private router: Router) { }

  public login(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.request('login', data).subscribe(
        res => {
          this.storage.set('authData', res);
          this.fillAuthData(res);
          resolve(true);
        },
        err => reject(err.error)
      )
    });
  }

  private fillAuthData(res: any) {
    this.user = new User(res.isActive, 'NA', res.userTypeId);
    this.token = res.token;
    this.isAuthenticated = true;
  }

  public async logout() {
    await this.storage.remove('authData');
    this.router.navigateByUrl('/login')
    this.user = null;
  }

  public async isLoggedIn(): Promise<boolean> {
    let res = await this.storage.get('authData');

    return new Promise((resolve, reject) => {
      if (res) {
        this.fillAuthData(res);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
}
