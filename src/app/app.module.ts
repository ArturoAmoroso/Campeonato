import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { AddEquipoComponent } from './components/add-equipo/add-equipo.component';
import { EquipoDetailsComponent } from './components/equipo-details/equipo-details.component';
import { AddJugadorComponent } from './components/add-jugador/add-jugador.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { AddPartidoComponent } from './components/add-partido/add-partido.component';
import { HeaderComponent } from './components/header/header.component';
import { JugadorPartidoComponent } from './components/jugador-partido/jugador-partido.component';
import { JugadaComponent } from './components/jugada/jugada.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    EquiposComponent,
    AddEquipoComponent,
    EquipoDetailsComponent,
    AddJugadorComponent,
    PartidosComponent,
    AddPartidoComponent,
    HeaderComponent,
    JugadorPartidoComponent,
    JugadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
