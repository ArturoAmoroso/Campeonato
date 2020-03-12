import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Equipo[];

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipos = this.equipoService.getEquipos();
  }

  onSubmit(){
  }

  addEquipo(equipo: Equipo){
    this.equipoService.saveEquipo(equipo);
  }

}
