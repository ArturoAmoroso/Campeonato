import { Injectable } from '@angular/core';
import { Equipo } from '../models/Equipo';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  equipos: Equipo[] = [];
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
      if(aux)
        this.equipos = aux;
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
}
