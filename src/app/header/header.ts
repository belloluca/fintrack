import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  readonly isOpen = signal(false);

  toggleMenu(): void {
    this.isOpen.update((curr) => !curr);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
