import { Routes } from '@angular/router';
import { LayoutComponent } from './portfolio/layouts/layout/layout.component';
import { HomeComponent } from '@pages/home/home.component';
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
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        title: 'Inicio - Darío Vidal',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Proyectos - Darío Vidal',
      },
      {
        path: 'projects/:key',
        component: ProjectComponent,
        title: 'Proyecto - Darío Vidal',
      },
      {
        path: 'education',
        component: EducationComponent,
        title: 'Educación - Darío Vidal',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contacto - Darío Vidal',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
