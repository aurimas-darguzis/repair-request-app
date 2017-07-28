import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, RequestOptions, RequestMethod, ResponseOptions } from '@angular/http';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let subject: AuthService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([AuthService, MockBackend], (github, mockBackend) => {
    subject = github;
    backend = mockBackend;
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should get profile data of user', (done) => {
    const profileInfo = { login: 'sonic', id: 325, name: 'Tester' };
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('https://api.github.com/users/blacksonic');
      expect(connection.request.method).toEqual(RequestMethod.Get);


      const options = new ResponseOptions({ body: profileInfo });
      connection.mockRespond(new Response(options));
    });

    subject.getProfile('blacksonic').subscribe((response) => {
      expect(response).toEqual(profileInfo);
      done();
    });

  });

});
