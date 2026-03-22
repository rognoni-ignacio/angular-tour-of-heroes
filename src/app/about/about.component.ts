import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  projectHighlights: string[] = [
    'Built with Angular standalone components and modern template syntax.',
    'Demonstrates component composition, dependency injection, and HTTP data fetching.',
    'Uses responsive utility classes for a clean desktop and mobile layout.',
  ];
}
