import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwHomeComponent } from './pw-home.component';

describe('MainComponent', () => {
  let component: PwHomeComponent;
  let fixture: ComponentFixture<PwHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
