import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bolnica } from '../models/bolnica';

@Injectable({
  providedIn: 'root'
})
export class BolnicaService {
  private readonly API_URL = 'http://localhost:8082/bolnica';

  constructor(private http: HttpClient) {}

  public getAllBolnica(): Observable<Bolnica[]> {
    return this.http.get<Bolnica[]>(this.API_URL);
  }

  public addBolnica(bolnica: Bolnica): Observable<any> {
    return this.http.post(this.API_URL, bolnica);
  }

  public updateBolnica(bolnica: Bolnica): Observable<any> {
    return this.http.put(`${this.API_URL}/${bolnica.id}`, bolnica);
  }

  public deleteBolnica(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}