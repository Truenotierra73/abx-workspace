import { Component, signal } from '@angular/core';

import { AbxSideMenuComponent, TitleColor } from 'abx-side-menu';

@Component({
  selector: 'app-root',
  imports: [AbxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'abx-testbed-app';
  isAuthenticated = signal<boolean>(false);
  protected readonly TitleColor = TitleColor;
}
