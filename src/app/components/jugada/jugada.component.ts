import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';

@Component({
  selector: 'app-jugada',
  templateUrl: './jugada.component.html',
  styleUrls: ['./jugada.component.css']
})
export class JugadaComponent implements OnInit {
  @Input() equipo: Equipo;

  constructor() { }

  ngOnInit() {
  }

}
