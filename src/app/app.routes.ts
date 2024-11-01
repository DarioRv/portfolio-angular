import { Routes } from '@angular/router';
import { LayoutComponent } from './portfolio/layouts/layout/layout.component';
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { EducationComponent } from '@pages/education/education.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { ProjectComponent } from '@pages/project/project.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Inicio',
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Proyectos',
      },
      {
        path: 'projects/:key',
        component: ProjectComponent,
      },
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
