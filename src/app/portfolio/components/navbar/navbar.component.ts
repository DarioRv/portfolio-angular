import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '@interfaces/menu-item.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgClass],
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
      label: 'Experiencia',
      routerLink: '/',
      fragment: 'experience',
    },
    {
      label: 'Proyectos',
      routerLink: '/',
      fragment: 'projects',
    },
    {
      label: 'Educación',
      routerLink: '/',
      fragment: 'education',
    },
    {
      label: 'Contacto',
      routerLink: '/',
      fragment: 'contact',
    },
  ];

  visible = false;

  toggleMenu() {
    this.visible = !this.visible;
    console.log('Menu toggled');
  }
}
