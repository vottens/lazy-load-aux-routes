import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aux3Component } from './aux3.component';

describe('Aux3Component', () => {
  let component: Aux3Component;
  let fixture: ComponentFixture<Aux3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aux3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aux3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
