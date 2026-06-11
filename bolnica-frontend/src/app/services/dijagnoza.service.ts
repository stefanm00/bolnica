import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dijagnoza } from '../models/dijagnoza';

@Injectable({ providedIn: 'root' })
export class DijagnozaService {
  private url = 'http://localhost:8082/dijagnoza';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Dijagnoza[]> {
    return this.http.get<Dijagnoza[]>(this.url);
  }

  getById(id: number): Observable<Dijagnoza> {
    return this.http.get<Dijagnoza>(`${this.url}/${id}`);
  }

  save(dijagnoza: Dijagnoza): Observable<Dijagnoza> {
    return this.http.post<Dijagnoza>(this.url, dijagnoza);
  }

  update(id: number, dijagnoza: Dijagnoza): Observable<Dijagnoza> {
    return this.http.put<Dijagnoza>(`${this.url}/${id}`, dijagnoza);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}