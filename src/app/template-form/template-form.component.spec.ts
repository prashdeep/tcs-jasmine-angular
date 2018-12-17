import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

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
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#firstname').value='';
    fixture.detectChanges();
    console.log(compiled.querySelectorAll(".errors"));
  })

});
