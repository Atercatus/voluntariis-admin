import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './pw-home.component.html',
  styleUrls: ['./pw-home.component.scss'],
})
export class PwHomeComponent implements OnInit {
  constructor() {
    console.log('main cons');
  }

  ngOnInit(): void {}
}
