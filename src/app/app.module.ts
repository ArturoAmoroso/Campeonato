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

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    EquiposComponent,
    AddEquipoComponent,
    EquipoDetailsComponent,
    AddJugadorComponent,
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
