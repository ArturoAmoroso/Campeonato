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
    localStorage.setItem("equipos", JSON.stringify("this.equipos"));
    let aux = JSON.parse(localStorage.getItem("equipos"));
  }

  saveEquipo(equipo: Equipo) {

    this.equipos.push(equipo);
  }

  getEquipos() : Equipo[] {
    return this.equipos;
  }

  getEquipo(nombre: string): Equipo{
    return this.equipos.find(equipo => equipo.nombre === nombre);
  }

}
