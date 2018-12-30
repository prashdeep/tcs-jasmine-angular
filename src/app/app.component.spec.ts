import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


describe('AppComponent', () => {
  let location:Location;
  let router:Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ContactComponent
      ],
      imports:[RouterTestingModule.withRoutes([
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
        }
     ])]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('navigates to "" redirects to "/home', fakeAsync(()=>{
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }))
});
