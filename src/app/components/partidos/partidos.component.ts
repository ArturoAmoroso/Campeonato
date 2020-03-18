import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos: Partido[] = [];

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit() {
    this.partidos = this.campeonatoService.getPartidos();
  }



}
