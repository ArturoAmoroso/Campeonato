export abstract class Jugador {
// export class Jugador {
    nombre: string;
    posicion: string;
    casaca: number;

    goles: number;
	asistencias: number;
	rojas: number;
	amarillas: number;
	partJugados: number;
    ptsFaltas: number;
    factorLimpio: number;

    constructor(nombre: string, posicion: string, casaca: number) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.casaca = casaca;

        this.goles = 0;
        this.asistencias = 0;
        this.rojas = 0;
        this.amarillas = 0;
        this.partJugados = 0;
        this.ptsFaltas = 0;
    }
    abstract mostrar(): void;
}