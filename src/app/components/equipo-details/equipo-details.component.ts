import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Equipo } from 'src/app/models/Equipo';
import { Jugador } from 'src/app/models/Jugador';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-equipo-details',
  templateUrl: './equipo-details.component.html',
  styleUrls: ['./equipo-details.component.css']
})
export class EquipoDetailsComponent implements OnInit {

  equipo: Equipo;

  constructor(private route: ActivatedRoute, private campeonatoService: CampeonatoService, private location: Location) { }

  ngOnInit(): void {
    this.getEquipo();
  }
  getEquipo(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.equipo = this.campeonatoService.getEquipo(nombre);
  }
  goBack(): void {
    this.location.back();
  }

  addJugador(jugador: Jugador): void {
    this.equipo.jugadores.push(jugador);
  }

}
