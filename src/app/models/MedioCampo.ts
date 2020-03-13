import { Jugador } from './Jugador';

export class MedioCampo extends Jugador {
    constructor(nombre: string, posicion: string, casaca: number) {
		super(nombre, posicion, casaca);
		this.factorLimpio = 2;
	}
	mostrar(){
		console.log(`Factor medio campo: ${this.factorLimpio}`);
	}
}