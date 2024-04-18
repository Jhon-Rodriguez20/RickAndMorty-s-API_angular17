import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/personaje.model';
import { GET_ALL_CHARACTERS } from '../connections/helpers/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private httpPeticion = inject(HttpClient);
  private urlBase: string = GET_ALL_CHARACTERS;

  getPersonajes(): Observable<Result[]> {
    return this.httpPeticion.get<Result[]>(this.urlBase);
  }

  getPersonajeById(id: number): Observable<Result> {
    return this.httpPeticion.get<Result>(`${this.urlBase}/${id}`);
  }
}
