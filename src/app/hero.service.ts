import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'assets/mock-heroes.json';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
