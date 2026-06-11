import { Odeljenje } from './odeljenje';
import { Dijagnoza } from './dijagnoza';

export interface Pacijent {
  id: number;
  ime: string;
  prezime: string;
  zdr_osiguranje: boolean;
  datum_rodjenja: string;
  odeljenje: Odeljenje;
  dijagnoza: Dijagnoza;
}