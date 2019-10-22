import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    loop: true
  };
  constructor() { }

  ngOnInit() {
  }

}
