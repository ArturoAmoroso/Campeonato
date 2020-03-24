import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Jugador } from 'src/app/models/Jugador';
import { Arquero } from 'src/app/models/Arquero';
import { Defensor } from 'src/app/models/Defensor';
import { Delantero } from 'src/app/models/Delantero';
import { MedioCampo } from 'src/app/models/MedioCampo';

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
    let jugador: Jugador;
    switch (this.posicion)
    {
      case "Delantero":
        jugador = new Delantero(this.nombre, this.posicion, this.casaca);
        break;
      case "Mediocampo":
        jugador = new MedioCampo(this.nombre, this.posicion, this.casaca);
        break;
      case "Defensor":
        jugador = new Defensor(this.nombre, this.posicion, this.casaca);
        break;
      case "Arquero":
        jugador = new Arquero(this.nombre, this.posicion, this.casaca);
        break;
    }
    jugador.mostrar();
    this.addJugador.emit(jugador);
  }
}
