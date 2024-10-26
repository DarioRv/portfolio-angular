import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@interfaces/menu-item.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {
    class: 'fixed top-5 right-5 z-10',
  },
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      routerLink: '/home',
    },
    {
      label: 'Sobre mi',
      routerLink: '/about',
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
}
