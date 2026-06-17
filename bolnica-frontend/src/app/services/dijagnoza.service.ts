import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dijagnoza } from '../models/dijagnoza';

@Injectable({
  providedIn: 'root'
})
export class DijagnozaService {
  private readonly API_URL = 'http://localhost:8082/dijagnoza';

  constructor(private http: HttpClient) {}

  public getAllDijagnoza(): Observable<Dijagnoza[]> {
    return this.http.get<Dijagnoza[]>(this.API_URL);
  }

  public addDijagnoza(dijagnoza: Dijagnoza): Observable<any> {
    return this.http.post(this.API_URL, dijagnoza);
  }

  public updateDijagnoza(dijagnoza: Dijagnoza): Observable<any> {
    return this.http.put(`${this.API_URL}/${dijagnoza.id}`, dijagnoza);
  }

  public deleteDijagnoza(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}