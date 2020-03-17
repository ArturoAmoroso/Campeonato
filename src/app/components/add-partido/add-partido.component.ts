import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { Partido } from 'src/app/models/Partido';
import { Jugador } from 'src/app/models/Jugador';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-add-partido',
  templateUrl: './add-partido.component.html',
  styleUrls: ['./add-partido.component.css']
})
export class AddPartidoComponent implements OnInit {
  nombreEquipo: string;
  partido: Partido = new Partido;
  equipos: Equipo[] = [];
  mensaje: string;
  jugada: string = "ninguna";
  jugadores: Jugador[];
  equipoJugada: Equipo;
  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit() {
    this.equipos = this.campeonatoService.getEquipos();
  }

  agregarEquipo(){
    let equipoEncontrado: any;
    equipoEncontrado = this.campeonatoService.getEquipo(this.nombreEquipo);
    if(equipoEncontrado)
    {
      if( this.partido.equipo1 == undefined)
      {
        if(equipoEncontrado !== this.partido.equipo2)
          this.partido.equipo1 = equipoEncontrado;
        else
          this.mensaje = "Equipo ya ha sido elegido!!!";
      }
      else
      {
        if(this.partido.equipo2 == undefined )
        {
          if(equipoEncontrado !== this.partido.equipo1)
            this.partido.equipo2 = equipoEncontrado;
          else
           this.mensaje = "Equipo ya ha sido elegido!!!";
        }
        else
          this.mensaje = "Equipos ya han sido agregados!!!";
      }
      console.log(this.partido);
    }
    else
      this.mensaje = "Equipo no encontrado";
  }
  
  addPlayers(jugadores: Jugador[]){
    if(this.partido.jugadoresEquipo1.length == 0)
      this.partido.jugadoresEquipo1 = jugadores;
    else
      this.partido.jugadoresEquipo2 = jugadores;
  }

  jugadaDelEquipo(equipo: Equipo){
    this.equipoJugada = equipo;
    if(equipo == this.partido.equipo1)
    {
      this.jugadores = this.partido.jugadoresEquipo1;
      if(this.jugada == "gol")
        this.partido.golesEquipo1++;
    }
    if(equipo == this.partido.equipo2)
    {
      this.jugadores = this.partido.jugadoresEquipo2;
      if(this.jugada == "gol")
        this.partido.golesEquipo2++;
    }
  }

  addJugada(jugador: Jugador){
    switch(this.jugada){
      case "gol":{
        jugador.goles = jugador.goles+1;
        break;
      }
      case "tarjetaAmarilla":{
        jugador.amarillas = jugador.amarillas+1;
        break;
      }
      case "tarjetaRoja":{
        jugador.rojas = jugador.rojas+1;
        break;
      }
    }
    console.log(this.partido);
  }

}
