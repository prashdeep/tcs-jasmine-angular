import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import { AppStore } from '../AppStore';
@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent{

  counter: number;

  constructor(private ngRedux:NgRedux<AppStore>) { 

    ngRedux.subscribe(() =>{
      this.counter = ngRedux.getState().counter;
    })
    
  }

  increment(){
    this.ngRedux.dispatch({type:'INCREMENT'});
  }
}
