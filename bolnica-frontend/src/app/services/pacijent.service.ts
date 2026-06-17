import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacijent } from '../models/pacijent';

@Injectable({
  providedIn: 'root'
})
export class PacijentService {
  private readonly API_URL = 'http://localhost:8082/pacijent';

  constructor(private http: HttpClient) {}

  public getAllPacijent(): Observable<Pacijent[]> {
    return this.http.get<Pacijent[]>(this.API_URL);
  }

  public addPacijent(pacijent: Pacijent): Observable<any> {
    return this.http.post(this.API_URL, pacijent);
  }

  public updatePacijent(pacijent: Pacijent): Observable<any> {
    return this.http.put(`${this.API_URL}/${pacijent.id}`, pacijent);
  }

  public deletePacijent(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}