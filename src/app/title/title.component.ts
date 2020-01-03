import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {


  @Input() iconName: string;
  @Input() title: string;
  @Input() align: string;
  @Input() background: string;

  constructor() { }

  ngOnInit() {
  }

}
