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
    component.onSelect(heroesMock[0]);
    fixture.detectChanges();

    const container: HTMLElement = fixture.nativeElement.querySelector('.heroes-container');
    const detailPanel: HTMLElement = fixture.nativeElement.querySelector('.hero-detail-panel');

    expect(container.classList).toContain('show-detail');
    expect(detailPanel.classList).toContain('open');
    expect(detailPanel.textContent).toContain('HEROONE');
  });

  it('should close detail panel and reset selected hero when close is clicked', () => {
    component.onSelect(heroesMock[0]);
    fixture.detectChanges();

    const closeButton: HTMLButtonElement = fixture.nativeElement.querySelector('.close-button');
    closeButton.click();
    fixture.detectChanges();

    const container: HTMLElement = fixture.nativeElement.querySelector('.heroes-container');
    const detailPanel: HTMLElement = fixture.nativeElement.querySelector('.hero-detail-panel');

    expect(component.selectedHero).toBeUndefined();
    expect(container.classList).not.toContain('show-detail');
    expect(detailPanel.classList).not.toContain('open');
  });
});

