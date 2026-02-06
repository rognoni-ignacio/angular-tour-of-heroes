import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  const heroesMock = [
    { id: 1, name: 'HeroOne' },
    { id: 2, name: 'HeroTwo' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent],
      providers: [
        {
          provide: HeroService,
          useValue: {
            getHeroes: () => of(heroesMock)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display detail panel when a hero is selected', () => {
    const heroItems: NodeListOf<HTMLLIElement> =
      fixture.nativeElement.querySelectorAll('[data-testid="hero-item"]');

    heroItems[0].click();
    fixture.detectChanges();

    const detailPanel: HTMLElement = fixture.nativeElement.querySelector('[data-testid="hero-detail-panel"]');

    expect(component.selectedHero).toEqual(heroesMock[0]);
    expect(detailPanel.classList).toContain('translate-x-0');
    expect(detailPanel.textContent).toContain('HEROONE');
  });

  it('should close detail panel and reset selected hero when close is clicked', () => {
    const heroItems: NodeListOf<HTMLLIElement> =
      fixture.nativeElement.querySelectorAll('[data-testid="hero-item"]');

    heroItems[0].click();
    fixture.detectChanges();

    const closeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('[data-testid="close-detail-button"]');
    closeButton.click();
    fixture.detectChanges();

    const detailPanel: HTMLElement = fixture.nativeElement.querySelector('[data-testid="hero-detail-panel"]');

    expect(component.selectedHero).toBeUndefined();
    expect(detailPanel.classList).toContain('translate-x-full');
  });
});
