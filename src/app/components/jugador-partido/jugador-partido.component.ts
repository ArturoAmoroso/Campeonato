import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { Jugador } from 'src/app/models/Jugador';

@Component({
  selector: 'app-jugador-partido',
  templateUrl: './jugador-partido.component.html',
  styleUrls: ['./jugador-partido.component.css']
})
export class JugadorPartidoComponent implements OnInit {
  casaca: Number;
  @Input() equipo: Equipo;
  @Output() dropTeam: EventEmitter<any> = new EventEmitter();
  @Output() addPlayers: EventEmitter<any> = new EventEmitter();
  jugadores: Jugador[] = [];
  configurar: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  quitarEquipo(){
    this.dropTeam.emit(this.equipo);
    this.equipo = undefined;
    this.jugadores.forEach(j => j.partJugados--);
    this.jugadores = [];
    this.configurar = true;
  }
  addPlayer(jugador: Jugador){
    if(this.jugadores.find(j => j.casaca == jugador.casaca))
    {
      // jugador.partJugados--;
      this.jugadores = this.jugadores.filter(j => j.casaca != jugador.casaca);
    }
    else
    {
      this.jugadores.push(jugador);
      // jugador.partJugados++;
    }
    console.log(this.jugadores);
  }

  guardarAlineacion(){
    const equipoConfigurado = {
      nombre: this.equipo.nombre,
      puntos: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      jugadores: this.jugadores
    }
    this.addPlayers.emit(equipoConfigurado);
    // this.addPlayers.emit(this.jugadores);
    this.configurar = false;
  }
}
