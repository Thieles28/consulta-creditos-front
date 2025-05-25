import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credito } from '../model/credito';

@Injectable({
  providedIn: 'root',
})
export class CreditoService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listarCreditos(numeroNfse: String): Observable<Array<Credito>> {
    return this.http.get<Array<Credito>>(`${this.baseUrl}/creditos/${numeroNfse}`);
  }

  consultarCredito(numeroCredito: String): Observable<Credito> {
    return this.http.get<Credito>(`${this.baseUrl}/creditos/credito/${numeroCredito}`);
  }
}
