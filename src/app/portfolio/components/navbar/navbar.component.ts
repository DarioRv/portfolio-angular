import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '@interfaces/menu-item.interface';
import { LanguageService } from '@services/language.service';
import { IconsModule } from 'app/icons/icons.module';
import { Language } from 'app/portfolio/shared/enums/language.enum';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, IconsModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {
    class: 'fixed bg-black top-0 left-0 right-0 z-50',
  },
})
export class NavbarComponent {
  private languageService = inject(LanguageService);

  readonly currentLanguage = this.languageService.language;
  readonly Language = Language;

  menuItems: MenuItem[] = [
    {
      label: 'nav.about',
      routerLink: '/',
      icon: 'user',
    },
    {
      label: 'nav.experience',
      routerLink: '/',
      fragment: 'experience',
      icon: 'briefcase-business',
    },
    {
      label: 'nav.projects',
      routerLink: '/',
      fragment: 'projects',
      icon: 'pencil-ruler',
    },
    {
      label: 'nav.education',
      routerLink: '/',
      fragment: 'education',
      icon: 'graduation-cap',
    },
    {
      label: 'nav.contact',
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

  changeLanguage(lang: Language) {
    this.languageService.changeLanguage(lang);
  }
}
