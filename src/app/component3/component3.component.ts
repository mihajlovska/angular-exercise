import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  iconName = 'android';
  title = 'Endava';
  align = 'flex-end';
  background = 'aliceblue';
  constructor() { }

  ngOnInit() {
  }

}
