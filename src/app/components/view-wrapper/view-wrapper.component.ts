import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss'],
})
export class ViewWrapperComponent implements OnInit {
  constructor() {
    console.log('ViewWrapper cons');
  }

  ngOnInit(): void {}
}
