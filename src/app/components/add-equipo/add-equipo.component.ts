import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';

@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.css']
})
export class AddEquipoComponent implements OnInit {

  // equipo: Equipo;
  nombre: string;
  @Output() addEquipo: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    const equipo = {
      nombre: this.nombre,
      puntos: 0,
      jugadores: []
      // jugadores: [{ nombre: "Messi", posicion: "delantero", goles: 0}]
    }
    this.addEquipo.emit(equipo)
  }

}
