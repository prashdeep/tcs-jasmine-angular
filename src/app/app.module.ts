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



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    SearchComponent,
    ContactComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
