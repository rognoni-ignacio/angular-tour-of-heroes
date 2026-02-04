import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch heroes from the assets file', () => {
    const mockHeroes: Hero[] = [
      { id: 1, name: 'HeroOne' },
      { id: 2, name: 'HeroTwo' },
    ];

    let actual: Hero[] | undefined;
    service.getHeroes().subscribe((heroes) => (actual = heroes));

    const req = httpMock.expectOne('assets/mock-heroes.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockHeroes);

    expect(actual).toEqual(mockHeroes);
  });
});
