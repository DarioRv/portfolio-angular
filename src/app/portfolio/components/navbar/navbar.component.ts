import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@interfaces/menu-item.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {
    class: 'fixed top-5 left-5 md:-translate-x-1/2 md:left-1/2 z-10',
  },
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      routerLink: '/',
    },
    {
      label: 'Proyectos',
      routerLink: '/projects',
    },
    {
      label: 'Educación',
      routerLink: '/education',
    },
    {
      label: 'Contacto',
      routerLink: '/contact',
    },
  ];

  visible = false;

  toggleMenu() {
    this.visible = !this.visible;
    console.log('Menu toggled');
  }
}
