import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.component.html',
  styleUrls: ['./add-jugador.component.css']
})
export class AddJugadorComponent implements OnInit {

  nombre: string;
  @Output() addJugador: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const jugador = {
      nombre: this.nombre,
      goles: 0,
    }
    this.addJugador.emit(jugador)
  }

}
