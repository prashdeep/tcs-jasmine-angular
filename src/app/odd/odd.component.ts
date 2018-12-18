import { Component, OnInit } from '@angular/core';
import { NumbergeneratorService } from '../numbergenerator.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor(private generator:NumbergeneratorService) { }

  ngOnInit() {  }

  handler(){
    this.generator.decrement();
  }
}
