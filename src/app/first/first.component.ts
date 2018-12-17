import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `{{message}}`,
  styleUrls: ['./first.component.css']
})
export class FirstComponent{

  constructor() { }

  @Input() message:string;

}
