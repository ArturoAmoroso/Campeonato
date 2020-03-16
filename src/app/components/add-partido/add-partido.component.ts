import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/Equipo';
import { Partido } from 'src/app/models/Partido';

@Component({
  selector: 'app-add-partido',
  templateUrl: './add-partido.component.html',
  styleUrls: ['./add-partido.component.css']
})
export class AddPartidoComponent implements OnInit {
  nombreEquipo: string;
  partido: Partido = new Partido;
  equipos: Equipo[] = [];
  mensaje: string;
  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipos = this.equipoService.getEquipos();
  }

  agregarEquipo(){
    let equipoEncontrado: any;
    equipoEncontrado = this.equipoService.getEquipo(this.nombreEquipo);
    if(equipoEncontrado)
    {
      if( this.partido.equipo1 == undefined)
      {
        if(equipoEncontrado !== this.partido.equipo2)
          this.partido.equipo1 = equipoEncontrado;
        else
          this.mensaje = "Equipo ya ha sido elegido!!!";
      }
      else
      {
        if(this.partido.equipo2 == undefined )
        {
          if(equipoEncontrado !== this.partido.equipo1)
            this.partido.equipo2 = equipoEncontrado;
          else
           this.mensaje = "Equipo ya ha sido elegido!!!";
        }
        else
          this.mensaje = "Equipos ya han sido agregados!!!";
      }
      console.log(this.partido);
    }
    else
      this.mensaje = "Equipo no encontrado";
  }
}
