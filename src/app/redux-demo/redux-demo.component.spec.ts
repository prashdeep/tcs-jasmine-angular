import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxDemoComponent } from './redux-demo.component';

describe('ReduxDemoComponent', () => {
  let component: ReduxDemoComponent;
  let fixture: ComponentFixture<ReduxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
