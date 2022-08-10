import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../interface/pokemon.interface';
import { PokemonInfoResponse } from '../interface/pokemoninfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl: string = 'https://pokeapi.co/api/v2';
  //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20

  constructor(
    private http: HttpClient
  ) { }

  // getCatalogo() {
  //   const url = `${this.apiUrl}/pokemon/?offset=20&limit=20`;
  //   return this.http.get<PokemonResponse>(url);
  // }

  getCatalogo(limit: number, offset: number) {
    const url = `${this.apiUrl}/pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<PokemonResponse>(url);
  }

  getinf(id: number) {
    const url = `${this.apiUrl}/pokemon/${id}`;
    return this.http.get<PokemonInfoResponse>(url);
  }

}
