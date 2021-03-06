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
    if(this.nombre){
      // const equipo = {
      //   nombre: this.nombre,
        // puntos: 0,
        // PG: 0,
        // PE: 0,
        // PP: 0,
        // jugadores: []
      // }
      let equipo = new Equipo(this.nombre);
      this.addEquipo.emit(equipo)
    }
  }

}
