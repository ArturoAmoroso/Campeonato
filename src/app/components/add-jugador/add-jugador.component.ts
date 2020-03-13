import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.component.html',
  styleUrls: ['./add-jugador.component.css']
})
export class AddJugadorComponent implements OnInit {

  nombre: string;
  posicion: string;
  casaca: number;
  @Output() addJugador: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const jugador = {
      nombre: this.nombre,
      posicion: this.posicion,
      casaca: this.casaca,
      
      goles: 0,
      asistencias: 0,
      rojas: 0,
      amarillas: 0,
      partJugados: 0,
      ptsFaltas: 0
    }

    switch (jugador.posicion)
    {
      case "Arquero":
        console.log("Arco");
        break;
      case "Delantero":
        console.log("Ataque");
        break;
    }

    this.addJugador.emit(jugador)
  }

}
