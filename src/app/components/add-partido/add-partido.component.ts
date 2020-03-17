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
  jugada: string = "ninguna";
  jugadores: Jugador[] = [];
  equipoJugada: Equipo;
  constructor(private campeonatoService: CampeonatoService) { }
  ngOnInit() {
    this.equipos = this.campeonatoService.getEquipos();
  }
  agregarEquipo(equipo: Equipo){
    if( this.partido.equipo1 == undefined)
      {
        if(equipo !== this.partido.equipo2)
          this.partido.equipo1 = equipo;
        else
          alert("Equipo ya ha sido elegido!!!");
      }
      else
      {
        if(this.partido.equipo2 == undefined )
        {
          if(equipo !== this.partido.equipo1)
            this.partido.equipo2 = equipo;
          else
            alert("Equipo ya ha sido elegido!!!");
        }
        else
          alert("Equipos ya han sido agregados!!!");
      }
  }
  dropTeam(equipo: Equipo){
    if(equipo == this.partido.equipo1)
    {
      this.partido.equipo1 = undefined;
      this.partido.jugadoresEquipo1 = [];
    }
    if(equipo == this.partido.equipo2)
    {
      this.partido.equipo2 = undefined;
      this.partido.jugadoresEquipo2 = [];
    }
    console.log(this.partido);
  }
  
  addPlayers(equipo: Equipo){
    if(this.partido.equipo1)
    {
      if(equipo.nombre == this.partido.equipo1.nombre)
        this.partido.jugadoresEquipo1 = equipo.jugadores;
    }
    if(this.partido.equipo2)
    {
      if(equipo.nombre == this.partido.equipo2.nombre)
      this.partido.jugadoresEquipo2 = equipo.jugadores;
    }
    console.log(this.partido);
  }

  jugadaDelEquipo(equipo: Equipo){
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
        jugador.goles++;
        break;
      }
      case "tarjetaAmarilla":{
        jugador.amarillas++;
        break;
      }
      case "tarjetaRoja":{
        jugador.rojas++;
        break;
      }
    }
    this.jugada = 'ninguna';
    this.jugadores = [];
    console.log(this.partido);
  }

}
