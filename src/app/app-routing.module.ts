import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoDetailsComponent } from './components/equipo-details/equipo-details.component';


const routes: Routes = [
  { path: 'equipos', component:EquiposComponent},
  { path: '', redirectTo: '/equipos', pathMatch: 'full' },
  { path: 'equipos/:nombre', component:EquipoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
