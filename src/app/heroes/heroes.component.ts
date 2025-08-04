import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  private readonly heroService = inject(HeroService);
  heroes$: Observable<Hero[]> = this.heroService.getHeroes();
  // When set, layout shifts to show responsive detail panel
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onCloseDetail(): void {
    this.selectedHero = undefined;
  }
}
