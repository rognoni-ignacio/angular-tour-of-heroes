import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page heading', () => {
    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('About This Project');
  });

  it('should render the project description', () => {
    const p: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain('Tour of Heroes');
  });

  it('should render a list item for each project highlight', () => {
    const items: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toBe(component.projectHighlights.length);
  });

  it('should display the correct text in each highlight item', () => {
    const items: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('li');
    component.projectHighlights.forEach((highlight, index) => {
      expect(items[index].textContent?.trim()).toBe(highlight);
    });
  });
});
