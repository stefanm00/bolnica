import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odeljenje } from '../models/odeljenje';

@Injectable({ providedIn: 'root' })
export class OdeljenjeService {
  private url = 'http://localhost:8082/odeljenje';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Odeljenje[]> {
    return this.http.get<Odeljenje[]>(this.url);
  }

  getById(id: number): Observable<Odeljenje> {
    return this.http.get<Odeljenje>(`${this.url}/${id}`);
  }

  save(odeljenje: Odeljenje): Observable<Odeljenje> {
    return this.http.post<Odeljenje>(this.url, odeljenje);
  }

  update(id: number, odeljenje: Odeljenje): Observable<Odeljenje> {
    return this.http.put<Odeljenje>(`${this.url}/${id}`, odeljenje);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}