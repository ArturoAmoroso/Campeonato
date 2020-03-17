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
  mensaje: string;
  @Input() equipo: Equipo;
  @Output() addPlayers: EventEmitter<any> = new EventEmitter();
  jugadores: Jugador[] = [];

  constructor() { }

  ngOnInit() {
  }

  addPlayer(){
    let jugador = this.equipo.jugadores.find(j => j.casaca == this.casaca);
    if(jugador)
    {
      if(this.jugadores.find(j => j.casaca == jugador.casaca))
        this.mensaje = "Jugador ya esta en la alineacion!";
      else
      {
        this.jugadores.push(jugador);
        jugador.partJugados++;
      }
    }
    else
      this.mensaje = "Jugador no encontrado!";
  }

  guardarAlineacion(){
   this.addPlayers.emit(this.jugadores);
  }

}
