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
  equipos_1: Equipo[];
  equipos_2: Equipo[];
  equipo_1: Equipo;
  // equipo_1: string = '';

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
  seleccionarEquipo_1(equipo: Equipo){
    if(equipo){
      console.log(equipo.nombre);
      this.partido.equipo1 = equipo;
      this.equipos_2 = this.equipos.filter(e => e != this.partido.equipo1);
    }
  }
  seleccionarEquipo_2(equipo: Equipo){
    if(equipo){
      console.log(equipo.nombre);
      this.partido.equipo2 = equipo;
      this.equipos_1 = this.equipos.filter(e => e != this.partido.equipo2);
    }
  }
  onSubmit(){
    console.log(this.equipo_1);
    // this.agregarEquipo(this.equipo_1);
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
    // console.log(this.partido);
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
  }

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
