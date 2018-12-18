import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import {NgRedux, NgReduxModule} from 'ng2-redux'; 
import { AppStore, rootReducer } from './AppStore';
import { ReduxDemoComponent } from './redux-demo/redux-demo.component';
import { PrimeComponent } from './prime/prime.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { NumbergeneratorService } from './numbergenerator.service';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    SearchComponent,
    ContactComponent,
    TemplateFormComponent,
    ReduxDemoComponent,
    PrimeComponent,
    EvenComponent,
    OddComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgReduxModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },

      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'register',
        component:TemplateFormComponent
      },
      {
        path:'redux',
        component:ReduxDemoComponent
      },
      {
        path:'emit',
        component:ParentComponent
      }
    ])
  ],
  providers:[NumbergeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor( ngRedux:NgRedux<AppStore> ){
    ngRedux.configureStore(rootReducer, {counter: 0});
  }
}

