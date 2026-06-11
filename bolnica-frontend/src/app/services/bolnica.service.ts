import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bolnica } from '../models/bolnica';

@Injectable({ providedIn: 'root' })
export class BolnicaService {
  private url = 'http://localhost:8082/bolnica';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bolnica[]> {
    return this.http.get<Bolnica[]>(this.url);
  }

  getById(id: number): Observable<Bolnica> {
    return this.http.get<Bolnica>(`${this.url}/${id}`);
  }

  save(bolnica: Bolnica): Observable<Bolnica> {
    return this.http.post<Bolnica>(this.url, bolnica);
  }

  update(id: number, bolnica: Bolnica): Observable<Bolnica> {
    return this.http.put<Bolnica>(`${this.url}/${id}`, bolnica);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}