import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/Jugador';


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  player: Jugador;

  jugadores: Jugador[] = [];

  constructor() {

  }

  ngOnInit() {

  }

}
