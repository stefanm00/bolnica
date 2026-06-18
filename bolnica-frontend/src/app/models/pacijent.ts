import { Odeljenje } from './odeljenje';
import { Dijagnoza } from './dijagnoza';

export class Pacijent {
    id!: number;
    ime!: string;
    prezime!: string;
    zdr_osiguranje!: boolean;
    datum_rodjenja!: Date;
    odeljenje!: Odeljenje;
    dijagnoza!: Dijagnoza;
}