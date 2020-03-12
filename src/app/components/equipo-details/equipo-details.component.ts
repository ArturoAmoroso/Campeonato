import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/Equipo';
import { Jugador } from 'src/app/models/Jugador';

@Component({
  selector: 'app-equipo-details',
  templateUrl: './equipo-details.component.html',
  styleUrls: ['./equipo-details.component.css']
})
export class EquipoDetailsComponent implements OnInit {

  equipo: Equipo;

  constructor(private route: ActivatedRoute, private equipoService: EquipoService, private location: Location) { }

  ngOnInit(): void {
    this.getEquipo();
  }
  getEquipo(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.equipo = this.equipoService.getEquipo(nombre);
  }
  goBack(): void {
    this.location.back();
  }

  addJugador(jugador: Jugador): void {
    this.equipo.jugadores.push(jugador);
  }

}
