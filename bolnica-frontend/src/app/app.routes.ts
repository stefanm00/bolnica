import { Routes } from '@angular/router';
import { BolnicaComponent } from './main/bolnica/bolnica';
import { DijagnozaComponent } from './main/dijagnoza/dijagnoza';
import { OdeljenjeComponent } from './main/odeljenje/odeljenje';
import { PacijentComponent } from './main/pacijent/pacijent';

export const routes: Routes = [
  { path: 'bolnica', component: BolnicaComponent },
  { path: 'dijagnoza', component: DijagnozaComponent },
  { path: 'odeljenje', component: OdeljenjeComponent },
  { path: 'pacijent', component: PacijentComponent },
];