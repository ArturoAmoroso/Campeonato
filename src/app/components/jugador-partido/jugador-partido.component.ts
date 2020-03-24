import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { Jugador } from 'src/app/models/Jugador';

@Component({
  selector: 'app-jugador-partido',
  templateUrl: './jugador-partido.component.html',
  styleUrls: ['./jugador-partido.component.css']
})
export class JugadorPartidoComponent implements OnInit {
  // casaca: Number;
  @Input() equipo: Equipo;
  configurar: boolean = true;
  @Output() setScore: EventEmitter<any> = new EventEmitter();
  jugadores: Jugador[] = [];
  jugadoresParticipan: Jugador[] = [];

  constructor() { }
  ngOnInit() {
  }
  
  addPlayer(jugador: Jugador){
    if(this.jugadoresParticipan.find(j => j.casaca == jugador.casaca)) {
      // jugador.partJugados--;
      this.jugadoresParticipan = this.jugadoresParticipan.filter(j => j.casaca != jugador.casaca);
    }
    else {
      this.jugadoresParticipan.push(jugador);
      // jugador.partJugados++;
    }
  }

  /*quitarEquipo(){
    this.dropTeam.emit(this.equipo);
    this.equipo = undefined;
    this.jugadores.forEach(j => j.partJugados--);
    this.jugadores = [];
    this.configurar = true;
  }*/

  buscarJugador(jugador: Jugador): boolean{
    if(this.jugadoresParticipan.find(j => j.casaca == jugador.casaca))
      return true;
    return false;
  }

  guardarResultado(){
    const equipoConfigurado = {
      nombre: this.equipo.nombre,
      puntos: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      jugadores: this.jugadoresParticipan
    }
    this.setScore.emit(equipoConfigurado);
    this.configurar = false;
    // console.log(this.equipo);
  }
}
