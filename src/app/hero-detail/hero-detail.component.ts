import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  @Output() close = new EventEmitter<void>();
}
