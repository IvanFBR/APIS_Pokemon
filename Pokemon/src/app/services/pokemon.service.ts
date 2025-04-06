import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiPokemon = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  obtenerPokemon(offset: number, limit: number = 20): Observable<any> {
    return this.http.get(`${this.apiPokemon}?offset=${offset}&limit=${limit}`);
  }

  DetallesPokemon(id: string): Observable<any> {
    return this.http.get(`${this.apiPokemon}/${id}`);
  }


}
