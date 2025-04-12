import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pokemon',
  imports: [CommonModule],
  templateUrl: './detalle-pokemon.component.html',
  styleUrl: './detalle-pokemon.component.css'
})
export class DetallePokemonComponent {
  pokemon: any = {};
  cargando = true;

  constructor(private route: ActivatedRoute, private pokemonService : PokemonService, private router: Router){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.DetallesPokemon(id).subscribe((data: any) => {
        this.pokemon = data;
        this.cargando = false;
      });
    }
  }  

  VolverLista(){
    const page = this.route.snapshot.queryParamMap.get('page') || 1;
    this.router.navigate(['/lista-pokemones'], { queryParams: { page: page } });
  }
}
