import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { HomeService } from './home.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HomeComponent } from '../home.component';

export class HomeServiceMock {
  private url: string = '/api';

  constructor() { }
  // crud methods, get method for getting data from the server

  getNumberOfTornillos() {
    const headers = new HttpHeaders().set('responseType', 'arraybuffer');    
    return of(3);
  }
}

// mockServiceCall
describe('HomeService', () => {
  let service: HomeServiceMock;
  let httpTestingController: HttpTestingController;
  let component: HomeComponent;
  let spy: any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HomeServiceMock],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(HomeServiceMock);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('returned Observable should match the right data', () => {
    service.getNumberOfTornillos()
      .subscribe(tornillos => {
        expect(tornillos).toEqual(3);
      });

    // const req = httpTestingController.expectOne('http://localhost:4200/');
    // expect(req.request.method).toEqual('get');
    // req.flush('3');
  });

});


