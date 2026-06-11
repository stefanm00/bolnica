import { Bolnica } from './bolnica';

export interface Odeljenje {
  id: number;
  naziv: string;
  lokacija: string;
  bolnica: Bolnica;
}