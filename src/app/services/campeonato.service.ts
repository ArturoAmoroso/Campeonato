import { Injectable } from '@angular/core';
import { Equipo } from '../models/Equipo';
import { Partido } from '../models/Partido';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  private equipos: Equipo[] = [];
  private partidos: Partido[] = [];
  constructor() {
  }

  saveEquipo(equipo: Equipo) {
    this.equipos.push(equipo);
    // localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

  getEquipos() : Equipo[] {
    if(this.equipos.length == 0)
    {
      let aux = JSON.parse(localStorage.getItem("equipos"));
      if(aux){
        for (let index = 0; index < aux.length; index++) {
          let equipo = new Equipo('');
          equipo.init(aux[index]);
          this.equipos.push(equipo);
        }
      }
      // this.equipos = aux;
    }
    return this.equipos;
  }

  getEquipo(nombre: string): Equipo{
    this.getEquipos();
    let equipo = null;
    equipo = this.equipos.find(e => e.nombre === nombre);
    return equipo;
  }

  saveLocal(){
    localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

  getPartidos(){
    return this.partidos;
  }

  savePartido(partido: Partido){
    this.partidos.push(partido);
  }
}
