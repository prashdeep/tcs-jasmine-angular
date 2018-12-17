import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstComponent } from './first.component';
import { ComponentRef } from '@angular/core';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the initial state of the component should be empty', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('');

    component.message='hello world';
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(fixture.debugElement.nativeElement.innerHTML).toBe('hello world');
    })
  });
});
