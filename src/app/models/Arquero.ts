import { Jugador } from './Jugador';

export class Arquero extends Jugador {
	golesEnContra: number;
	constructor(nombre: string, posicion: string, casaca: number) {
		super(nombre, posicion, casaca);
		this.golesEnContra = 0;
		this.factorLimpio = 3;
	}
	mostrar(){
		console.log(`Goles en contra: ${this.golesEnContra}`);
	}
}