import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyoneComponent } from './bodyone.component';

describe('BodyoneComponent', () => {
  let component: BodyoneComponent;
  let fixture: ComponentFixture<BodyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
