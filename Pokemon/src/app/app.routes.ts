import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPokemonesComponent } from './lista-pokemones/lista-pokemones.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-pokemones', component: ListaPokemonesComponent },
    { path: 'detalle-pokemon/:id', component: DetallePokemonComponent},
    { path: '**', redirectTo: '' }
];
