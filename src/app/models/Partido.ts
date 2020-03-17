import { Jugador } from './Jugador';
import { Equipo } from './Equipo';


export class Partido {
    equipo1: Equipo;
    equipo2: Equipo;
    golesEquipo1: number;
    golesEquipo2: number;
    jugadoresEquipo1: Jugador[];
    jugadoresEquipo2: Jugador[];
    constructor() {
        this.golesEquipo1 = 0;
        this.golesEquipo2 = 0;
        this.jugadoresEquipo1 = [];
        this.jugadoresEquipo2 = [];
    }
}