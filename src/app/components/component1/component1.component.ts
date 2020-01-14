import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  iconName = 'home';
  title = 'IT Labs';
  align = 'flex-start';
  background = 'lightgrey';
  constructor() { }

  ngOnInit() {
  }

}
