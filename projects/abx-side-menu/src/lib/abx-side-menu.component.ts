import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  yellow = 'text-yellow-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-abx-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './abx-side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbxSideMenuComponent {
  isAuthenticated: InputSignal<boolean> = input<boolean>(false);
  signOut: OutputEmitterRef<void> = output<void>();
  signIn: OutputEmitterRef<void> = output<void>();
  titleColor: InputSignal<TitleColor> = input<TitleColor>(TitleColor.blue);
}
