import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class PwHomeComponent implements OnInit {
  constructor() {
    console.log('main cons');
  }

  ngOnInit(): void {}
}
