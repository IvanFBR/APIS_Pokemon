import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPokemonesComponent } from './lista-pokemones/lista-pokemones.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lista-pokemones', component: ListaPokemonesComponent },
    { path: '**', redirectTo: '' }
];
