import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'power'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() { }

  public onItemClick(page: any): void {
    if (page.title === 'Logout') 
      this.authService.logout();
    else 
      this.router.navigateByUrl(page.url);
  }
}
