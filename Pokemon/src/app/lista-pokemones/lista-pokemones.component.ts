import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pokemones',
  imports: [CommonModule],
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

  constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const page = this.route.snapshot.queryParamMap.get('page');
    if (page) {
      this.pagina = +page;
    }
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

    this.cargando = false;

    setTimeout(() => {
      this.animandoContenido = false;
      this.animando = false;
    }, 100);
  }

  obtenerPokemonNombre(pokemon: any): string {
    return pokemon.name
      .replace(/-/g, ' ')
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  obtenerIdDesdeUrl(pokemon: any): string {
    return pokemon.url.split('/').filter(this.filterFalsy).pop();
  }

  cambiarPagina(pagina: number): void {
    if (pagina < 1 || pagina > this.totalPaginas) return;
  
    this.animandoContenido = true;
    this.animando = true; 
  
    setTimeout(() => {
      this.pagina = pagina;
      this.cargarPokemones();
    }, 400);
  }
  
  

  filterFalsy(value: any): boolean {
    return !!value;
  }

  indexSeleccionado: number | null = null;

  verDetalles(pokemon: any, index: number): void {
    this.indexSeleccionado = index;
  
    setTimeout(() => {
      const id = pokemon.url.split('/').filter(this.filterFalsy).pop();
      this.router.navigate(['/detalle-pokemon', id], { queryParams: { page: this.pagina } });
    }, 300);
  }
  

  VolverMenu(){
    this.router.navigate(['/home']);

  }

  
  animandoContenido = false;
  animando=false;

}
