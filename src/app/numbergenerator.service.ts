import { Injectable } from '@angular/core';


@Injectable()
export class NumbergeneratorService {

  public counter:number = 0;

  constructor() { }

  
  increment(){
    ++this.counter;
  }

  decrement(){
    --this.counter;
  }

}
