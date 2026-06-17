import { Routes } from '@angular/router';
import { HomeComponent } from './utility/home/home';
import { AboutComponent } from './utility/about/about';
import { AuthorComponent } from './utility/author/author';
import { BolnicaComponent } from './main/bolnica/bolnica.component';
import { DijagnozaComponent } from './main/dijagnoza/dijagnoza.component';
import { OdeljenjeComponent } from './main/odeljenje/odeljenje.component';
import { PacijentComponent } from './main/pacijent/pacijent.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bolnica', component: BolnicaComponent },
  { path: 'dijagnoza', component: DijagnozaComponent },
  { path: 'odeljenje', component: OdeljenjeComponent },
  { path: 'pacijent', component: PacijentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'author', component: AuthorComponent }
];