import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule,NgForm } from '@angular/forms';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;
  let form:NgForm;
  //spyOn(object,'method').and,calllFake(()=>{

  //})
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    form = component.ngForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check for invalid firstname',()=>{
    const fixture = TestBed.createComponent(TemplateFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll("input").length).toBe(3);
    expect(compiled.querySelectorAll(".errors").length).toBe(0);
  })

  it('should have first name error',()=>{
    const fixture = TestBed.createComponent(TemplateFormComponent);
    fixture.detectChanges();
    
    fixture.whenStable().then(()=>{
      form.controls['firstName'].setValue('1111');
      console.log(form.controls['firstName']);
      
    });
  })

});
