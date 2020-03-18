import { Jugador } from './Jugador';

export class Equipo {
    nombre: string;
    puntos: number;
    jugadores: Jugador[];
    PG: number;
    PE: number;
    PP: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntos = 0;
        this.PG = 0;
        this.PE = 0;
        this.PP = 0;
        this.jugadores = [];
    }

    init(equipo: any) {
        this.nombre = equipo.nombre;
        this.puntos = equipo.puntos;
        this.PG = equipo.PG;
        this.PE = equipo.PE;
        this.PP = equipo.PP;
        this.jugadores = equipo.jugadores;
    }

    calcularPtsTorneo(): void {
        this.puntos = (this.PG*3) + this.PE;
    }
}