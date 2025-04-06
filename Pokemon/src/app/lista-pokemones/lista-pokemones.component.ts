import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pokemones',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-pokemones.component.html',
  styleUrls: ['./lista-pokemones.component.css']
})
export class ListaPokemonesComponent implements OnInit {
  pokemon: any[] = [];
  pagina = 1;
  totalPaginas: number = 0;
  totalPokemones: number = 0;
  limit: number = 20;
  cargando: boolean = true;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.cargarPokemones();
  }

  cargarPokemones(): void {
    this.cargando = true;
    const offset = (this.pagina - 1) * 20;

    this.pokemonService.obtenerPokemon(offset).subscribe((response: any) => {
      this.totalPokemones = response.count;
      this.pokemon = response.results;
      this.totalPaginas = Math.ceil(this.totalPokemones / this.limit);
      this.cargando = false;
    });
  }

  obtenerPokemonNombre(pokemon: any): string {
    return pokemon.name
      .replace(/-/g, ' ')
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  cambiarPagina(pagina: number): void {
    this.pagina = pagina;
    this.cargarPokemones();
  }

  filterFalsy(value: any): boolean {
    return !!value;
  }

}
