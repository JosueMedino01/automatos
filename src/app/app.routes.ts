import { Routes } from '@angular/router';
import { AutomatoComponent } from './pages/automato/shell/automato/automato.component';
import { HomeComponent } from './pages/home/shell/home/home.component';

export const routes: Routes = [

  {
    path: 'bank',
    component: AutomatoComponent
  },
  {
    path: '',
    redirectTo: 'bank',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
