import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Equipo[];

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit() {
    this.equipos = this.campeonatoService.getEquipos();
  }

  onSubmit(){
  }

  addEquipo(equipo: Equipo){
    this.campeonatoService.saveEquipo(equipo);
  }

  saveLocal(){
    this.campeonatoService.saveLocal();
  }

}
