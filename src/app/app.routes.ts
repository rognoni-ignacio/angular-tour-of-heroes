import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/heroes' },
];
