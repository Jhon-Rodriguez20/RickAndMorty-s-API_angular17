import { Routes } from '@angular/router';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { PersonajeDetalleComponent } from './pages/personaje-detalle/personaje-detalle.component';

export const routes: Routes = [
  { path: '', component: PersonajeComponent },
  { path: 'personajes/:id', component: PersonajeDetalleComponent },
  { path: '**', redirectTo: 'full' },
];
