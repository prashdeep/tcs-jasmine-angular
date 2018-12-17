import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';


@Injectable()
export class TestService {

  constructor(private http:HttpClient) { }

  url:string;

  user:User[];

  getUser(num1:number, num2:number){
    return new Promise((resolve, reject)=>{
      setTimeout((val1:number, val2:number)=>{
        resolve(num1 + num2);
        //reject("the service is temporarily down");
      },1,[num1,num2]);
    });
  }

  getAllUsers(flag:boolean):Observable<User[]>{
    if(flag){
      return this.http.get<User[]>('http://test.api.com');
    }else {
    return Observable.throw('Invalid parameters');
    }
  }



}
