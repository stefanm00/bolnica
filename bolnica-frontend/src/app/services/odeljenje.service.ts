import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odeljenje } from '../models/odeljenje';

@Injectable({
  providedIn: 'root'
})
export class OdeljenjeService {
  private readonly API_URL = 'http://localhost:8082/odeljenje';

  constructor(private http: HttpClient) {}

  public getAllOdeljenje(): Observable<Odeljenje[]> {
    return this.http.get<Odeljenje[]>(this.API_URL);
  }

  public addOdeljenje(odeljenje: Odeljenje): Observable<any> {
    return this.http.post(this.API_URL, odeljenje);
  }

  public updateOdeljenje(odeljenje: Odeljenje): Observable<any> {
    return this.http.put(`${this.API_URL}/${odeljenje.id}`, odeljenje);
  }

  public deleteOdeljenje(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}