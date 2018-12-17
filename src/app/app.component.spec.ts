import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';

describe('AppComponent', () => {
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
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect(app.title).toEqual('app');
  });

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should route to home component ',async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#home').textContent).toBe('Home');
    expect(compiled.querySelector('#search').textContent).toBe('Search');
  }));

});
