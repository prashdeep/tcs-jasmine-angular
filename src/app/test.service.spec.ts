import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestService } from './test.service';
import { User } from './User';

describe('TestServicetesting', () => {
  let injector;
  let service:TestService;
  let testService:TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [TestService]
    });
    injector= getTestBed();
    service=injector.get(TestService);
    httpMock=injector.get(HttpTestingController);
  });

  beforeEach(inject([TestService],(service:TestService)=>{
    testService = service;
  }));

  afterEach(()=>{
    httpMock.verify();
  })


  describe('#getAllUsers',()=>{
    it('test fetching all the users',()=>{
        const users:User[]=[
          new User(11,'akash', 35000),
          new User(12,'anil', 25000),
          new User(13,'vinay', 15000),
          new User(14,'vikram', 56000)
        ];
    
        service.getAllUsers(true).subscribe(users=>{
          console.log('jhkfsdhjkfdhjkfdhjkfdshjkfd')
          console.log(users);
        });
    
        const request=httpMock.expectOne('http://test.api.com');
        expect(request.request.method).toBe("GET");
        request.flush(users);
    })
})

describe('#getAllUsers negative scenario',()=>{
  it('test fetching all the users',()=>{
      service.getAllUsers(false).subscribe(users=>{},error=>{
        expect(error).not.toBeNull();
        expect(error).toBe('Invalid parameters');
      });
  
      httpMock.expectNone('http://test.api.com');
  })
})
  
  it('should be created', ()=>{
    expect(service).toBeTruthy();
    expect(testService).toBeTruthy();
  });

  it('test promise', async(()=>{
    service.getUser(12,23).then((response)=>{
      //expect(response).toBeNull();
      expect(response).toBe(35);
    },(error)=>{
      expect(error).toBeTruthy();
      expect(error).toContain('temporarily')
    });
  }));
});
