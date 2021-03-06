import { Jugador } from './Jugador';

export class Defensor extends Jugador {
    constructor(nombre: string, posicion: string, casaca: number) {
		super(nombre, posicion, casaca);
		this.factorLimpio = 1;
	}
	mostrar(){
		console.log(`Factor defensor: ${this.factorLimpio}`);
	}
}