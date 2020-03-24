import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { Partido } from 'src/app/models/Partido';
import { Jugador } from 'src/app/models/Jugador';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { Delantero } from 'src/app/models/Delantero';

@Component({
  selector: 'app-add-partido',
  templateUrl: './add-partido.component.html',
  styleUrls: ['./add-partido.component.css']
})
export class AddPartidoComponent implements OnInit {
  public partido: Partido = new Partido;
  public equipos: Equipo[] = [];
  public equipos_1: Equipo[];
  public equipos_2: Equipo[];
  public elegirJugadores: boolean = false;

  public equipo_1: Equipo;
  public equipo_2: Equipo;

  jugada: string = "ninguna";
  jugadores: Jugador[] = [];
  equipoJugada: Equipo;
  asistencia: string = "ninguna";
  jugadoresAsistencia: Jugador[];

  constructor(private campeonatoService: CampeonatoService) { }
  ngOnInit() {
    this.equipos = this.campeonatoService.getEquipos();
    this.equipos_1 = this.equipos;
    this.equipos_2 = this.equipos;
  }
  filtrarEquipos(){
    if(this.partido.equipo2)
      this.equipos_1 = this.equipos.filter(e => e != this.partido.equipo2);
    if(this.partido.equipo1)
      this.equipos_2 = this.equipos.filter(e => e != this.partido.equipo1);
  }
  aceptarEquipos(){
    this.equipo_1 = this.initJugadores(this.partido.equipo1);
    this.equipo_2 = this.initJugadores(this.partido.equipo2);
    this.elegirJugadores = true;
  }
  initJugadores(equipo: Equipo): Equipo{
    let equipoAux: Equipo = new Equipo(equipo.nombre);
    for (let index = 0; index < equipo.jugadores.length; index++) {
      let jugador = equipo.jugadores[index];
      jugador = this.initJugador(jugador);
      equipoAux.jugadores[index] = jugador;
    }
    return equipoAux;
  }
  initJugador(jugador: Jugador): Jugador{
    let jugadorNuevo: Jugador = new Delantero(jugador.nombre, jugador.posicion, jugador. casaca);
    return jugadorNuevo;
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
  }

  setScore(equipo: Equipo){
    for (let index = 0; index < equipo.jugadores.length; index++) {
      let jugadorPartido: any = equipo.jugadores[index];
      let jugadorEquipo;
      if(equipo.nombre == this.partido.equipo1.nombre)
        jugadorEquipo =  this.partido.equipo1.jugadores.find(j => j.casaca == jugadorPartido.casaca);
      if(equipo.nombre == this.partido.equipo2.nombre)
        jugadorEquipo =  this.partido.equipo2.jugadores.find(j => j.casaca == jugadorPartido.casaca);

      jugadorEquipo.goles = jugadorEquipo.goles + jugadorPartido.goles;
      jugadorEquipo.asistencias = jugadorEquipo.asistencias + jugadorPartido.asistencias;
      if(jugadorPartido.amarillas)
        jugadorEquipo.amarillas++;
      if(jugadorPartido.rojas)
        jugadorEquipo.rojas++;
      if(jugadorPartido.posicion == "Arquero")
        jugadorEquipo.golesEnContra = jugadorEquipo.golesEnContra + jugadorPartido.golesEnContra;
        
      jugadorEquipo.partJugados++;
    }

  }


  /*jugadaDelEquipo(equipo: Equipo){
    if(equipo == this.partido.equipo1)d
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
        this.asistencia = 'pendiente';
        this.jugadoresAsistencia = this.jugadores.filter(j => j.casaca != jugador.casaca);
        this.campeonatoService.addGoleador(jugador);
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
      case "asistencia":{
        jugador.asistencias++;
        this.asistencia = 'ninguna';
        this.campeonatoService.addAsistidor(jugador);
        break;
      }
    }
    if(this.jugada != "gol")
    {
      this.jugada = 'ninguna';
      this.jugadores = [];
      this.asistencia = 'no';
    }
    console.log(this.partido);
  }*/


  terminarPartido(){
    let arqueroEquipo1: any = this.partido.jugadoresEquipo1.find(j => j.posicion == 'Arquero');
    let arqueroEquipo2: any = this.partido.jugadoresEquipo2.find(j => j.posicion == 'Arquero');
    if(arqueroEquipo1)
      arqueroEquipo1.golesEnContra = arqueroEquipo1.golesEnContra + this.partido.golesEquipo2;
    if(arqueroEquipo2)
      arqueroEquipo2.golesEnContra = arqueroEquipo2.golesEnContra + this.partido.golesEquipo1;
    
    if(this.partido.golesEquipo1 > this.partido.golesEquipo2)
    {
      this.partido.equipo1.PG++;
      this.partido.equipo2.PP++;
    }
    if(this.partido.golesEquipo2 > this.partido.golesEquipo1)
    {
      this.partido.equipo2.PG++;
      this.partido.equipo1.PP++;
    }
    if(this.partido.golesEquipo1 == this.partido.golesEquipo2)
    {
      this.partido.equipo1.PE++;
      this.partido.equipo2.PE++;
    }
    this.partido.equipo1.calcularPtsTorneo();
    this.partido.equipo2.calcularPtsTorneo();
    // this.partido.equipo1.puntos = (this.partido.equipo1.PG*3) + this.partido.equipo1.PE;
    // this.partido.equipo2.puntos = (this.partido.equipo2.PG*3) + this.partido.equipo2.PE;
    this.campeonatoService.savePartido(this.partido);
  }

}


/*
  initJugador(jugador: Jugador): Jugador{
    let jugadorAux: any;
    let jugadorNuevo: Jugador = new Delantero(jugador.nombre, jugador.posicion, jugador. casaca);
    jugadorAux = {};
    jugadorAux.nombre = jugador.nombre;
    jugadorAux.posicion = jugador.posicion;
    jugadorAux.casaca = jugador.casaca;
    jugadorAux.goles = 0;
    jugadorAux.asistencias = 0;
    jugadorAux.rojas = 0;
    jugadorAux.amarillas = 0;
    jugadorAux.golesEnContra = 0;
    return jugadorAux;
  }
*/