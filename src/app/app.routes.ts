import { Routes } from '@angular/router';
import { LayoutComponent } from './portfolio/layouts/layout/layout.component';
import { HomeComponent } from '@pages/home/home.component';
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
        title: 'Darío Vidal - Desarrollador Web Full Stack',
      },
      {
        path: 'projects/:key',
        component: ProjectComponent,
        title: 'Proyecto - Darío Vidal',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
