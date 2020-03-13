import { Injectable } from '@angular/core';
import { Equipo } from '../models/Equipo';
import { EQUIPOS } from 'src/app/mock-equipos';
import { Jugador } from '../models/Jugador';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[] = [];

  constructor() {
  }

  saveEquipo(equipo: Equipo) {
    this.equipos.push(equipo);
    // localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

  // updateEquipo(equipo: Equipo) {
  //   this.equipos.push(equipo);
  //   localStorage.setItem('equipos', JSON.stringify(this.equipos));
  // }

  getEquipos() : Equipo[] {
    let aux = JSON.parse(localStorage.getItem("equipos"));
    if(aux){
      this.equipos = aux;
    }
    return this.equipos;
  }

  getEquipo(nombre: string): Equipo{
    let equipo = null;
    let aux = JSON.parse(localStorage.getItem("equipos"));
    if(aux){
      equipo = aux.find(equipo => equipo.nombre === nombre);
    }
    else{
      equipo = this.equipos.find(equipo => equipo.nombre === nombre);
    }
    return equipo;
  }

  saveLocal(){
    localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

}
