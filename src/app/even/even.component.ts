import { Component, OnInit } from '@angular/core';
import { NumbergeneratorService } from '../numbergenerator.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor(private generator:NumbergeneratorService) { }

  ngOnInit() {
  }

  handler(){
   this.generator.increment();
  }

}
