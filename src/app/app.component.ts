import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveSearchDirective } from './live-search.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LiveSearchDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  throttledString = '';

  onInput(value: string): void {
   this.throttledString = value;
  }
}
