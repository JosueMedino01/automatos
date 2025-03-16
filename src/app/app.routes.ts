import { Routes } from '@angular/router';
import { AutomatoComponent } from './pages/automato/shell/automato/automato.component';
import { HomeComponent } from './pages/home/shell/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'automato',
    component: AutomatoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
