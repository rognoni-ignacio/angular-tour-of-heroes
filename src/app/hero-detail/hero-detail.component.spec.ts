import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display hero details when hero is provided', () => {
    component.hero = { id: 42, name: 'TestHero' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('TESTHERO Details');
    expect(compiled.textContent).toContain('42');
  });

  it('should emit close event when close button is clicked', () => {
    component.hero = { id: 1, name: 'Hero' };
    fixture.detectChanges();

    spyOn(component.close, 'emit');

    const closeButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('[data-testid="close-detail-button"]');
    closeButton.click();

    expect(component.close.emit).toHaveBeenCalled();
  });
});
