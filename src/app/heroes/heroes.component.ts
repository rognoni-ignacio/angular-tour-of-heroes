import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    imports: [CommonModule, HeroDetailComponent],
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  private heroService = inject(HeroService);

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
