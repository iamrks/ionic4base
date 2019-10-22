import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.request('userInfo').subscribe(
      res => console.log(res)
    )
  }
}
