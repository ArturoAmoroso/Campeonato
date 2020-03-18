import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoDetailsComponent } from './components/equipo-details/equipo-details.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { AddPartidoComponent } from './components/add-partido/add-partido.component';
import { JugadaComponent } from './components/jugada/jugada.component';


const routes: Routes = [
  { path: 'equipos', component:EquiposComponent},
  { path: '', redirectTo: '/partidos', pathMatch: 'full' },
  { path: 'equipos/:nombre', component:EquipoDetailsComponent},
  { path: 'partido', component:AddPartidoComponent},
  { path: 'jugada', component:JugadaComponent},
  { path: 'partidos', component:PartidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
