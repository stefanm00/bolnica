import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacijent } from '../models/pacijent';

@Injectable({ providedIn: 'root' })
export class PacijentService {
  private url = 'http://localhost:8082/pacijent';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pacijent[]> {
    return this.http.get<Pacijent[]>(this.url);
  }

  getById(id: number): Observable<Pacijent> {
    return this.http.get<Pacijent>(`${this.url}/${id}`);
  }

  save(pacijent: Pacijent): Observable<Pacijent> {
    return this.http.post<Pacijent>(this.url, pacijent);
  }

  update(id: number, pacijent: Pacijent): Observable<Pacijent> {
    return this.http.put<Pacijent>(`${this.url}/${id}`, pacijent);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}