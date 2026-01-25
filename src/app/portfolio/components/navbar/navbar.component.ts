import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '@interfaces/menu-item.interface';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, IconsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {
    class: 'fixed bottom-5 md:top-5 -translate-x-1/2 left-1/2 z-10',
  },
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      routerLink: '/',
      icon: 'user',
    },
    {
      label: 'Experiencia',
      routerLink: '/',
      fragment: 'experience',
      icon: 'briefcase-business',
    },
    {
      label: 'Proyectos',
      routerLink: '/',
      fragment: 'projects',
      icon: 'pencil-ruler',
    },
    {
      label: 'Educación',
      routerLink: '/',
      fragment: 'education',
      icon: 'graduation-cap',
    },
    {
      label: 'Contacto',
      routerLink: '/',
      fragment: 'contact',
      icon: 'phone',
    },
  ];

  visible = false;

  toggleMenu() {
    this.visible = !this.visible;
    console.log('Menu toggled');
  }
}
