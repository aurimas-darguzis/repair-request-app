import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
// import { Http, BaseRequestOptions, Response, RequestOptions, RequestMethod, ResponseOptions, Headers } from '@angular/http';
import { FakeBackend } from 'ngx-http-test';
import { AuthService } from './auth.service';

// package for back end:
// https://github.com/blacksonic/ngx-http-test

describe('AuthService', () => {
  let subject: AuthService;
  let backend: FakeBackend;
  const responseForm = '<form />';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        FakeBackend.getProviders()
      ]
    });
  });

  beforeEach(inject([AuthService, FakeBackend], (auth0, FakeBackend) => {
    subject = auth0;
    backend = FakeBackend;
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should be called with proper arguents', (done) => {
    backend.expectPost(
      'https://blacksonic.eu.auth0.com.auth0.com/usernamepassword/login',
      {
        username: 'blacksonic',
        password: 'secret',
        client_id: 'YOUR_CLIENT_ID'
      },
      {
        'Content-Type': 'application/json'
      }
    ).respond(responseForm);

    subject.login('blacksonic', 'secret').subscribe((response) => {
      expect(response).toEqual(responseForm);
      done();
    });
  });

  // it('should get profile data of user', (done) => {
  //   const profileInfo = { login: 'sonic', id: 325, name: 'Tester' };
  //   backend.connections.subscribe((connection: MockConnection) => {
  //     expect(connection.request.url).toEqual('https://api.github.com/users/blacksonic');
  //     expect(connection.request.method).toEqual(RequestMethod.Get);


  //     const options = new ResponseOptions({ body: profileInfo });
  //     connection.mockRespond(new Response(options));
  //   });

  //   subject.getProfile('blacksonic').subscribe((response) => {
  //     expect(response).toEqual(profileInfo);
  //     done();
  //   });
  // });

  // it('should be called with proper arguments', (done) => {
  //   backend.connections.subscribe((connection: MockConnection) => {
  //     expect(connection.request.url).toEqual('https://blacksonic.eu.auth0.com.auth0.com/usernamepassword/login');
  //     expect(connection.request.method).toEqual(RequestMethod.Post);
  //     expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
  //     expect(connection.request.getBody()).toEqual(JSON.stringify(
  //       {
  //         username: 'blacksonic',
  //         password: 'secret',
  //         client_id: 'YOUR_CLIENT_ID'
  //       }, null, 2
  //     ));
  //   });

    // subject.login('blacksonic', 'secret').subscribe((response) => {
    //   expect(response).toEqual('<form />');
    //   done();
    // });

  // });

});
