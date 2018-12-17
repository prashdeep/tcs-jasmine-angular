import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxDemoComponent } from './redux-demo.component';
import { NgRedux, NgReduxModule } from 'ng2-redux';

describe('ReduxDemoComponent', () => {
  let component: ReduxDemoComponent;
  let fixture: ComponentFixture<ReduxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxDemoComponent ],
      imports:[NgReduxModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
