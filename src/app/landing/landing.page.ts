import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    let a = ejemplo1.parse('1+1');
    // @ts-ignore
    generateTree([a.node]);
  }

}
