import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodythreeComponent } from './bodythree.component';

describe('BodythreeComponent', () => {
  let component: BodythreeComponent;
  let fixture: ComponentFixture<BodythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
