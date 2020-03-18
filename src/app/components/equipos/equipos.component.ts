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
    if(this.equipos.length > 1)
    {
      this.equipos.sort(function (a, b) {
        if (a.puntos < b.puntos)
          return 1;
        if (a.puntos > b.puntos)
          return -1;
        return 0;
      })
    }

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
