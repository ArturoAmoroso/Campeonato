import { Jugador } from './Jugador';

export class Delantero extends Jugador {
    constructor(nombre: string, posicion: string, casaca: number) {
		super(nombre, posicion, casaca);
		this.factorLimpio = 4;
	}
	mostrar(){
		console.log(`Factor delantero: ${this.factorLimpio}`);
	}
}