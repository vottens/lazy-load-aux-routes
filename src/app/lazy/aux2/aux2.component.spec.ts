import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aux2Component } from './aux2.component';

describe('Aux2Component', () => {
  let component: Aux2Component;
  let fixture: ComponentFixture<Aux2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aux2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aux2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
