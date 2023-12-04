function algoritmoAnalisis(declaration) {
	let stack = generarStack(declaration);
	let stackContent = [];
	let apuntador = 0;

	const popInfo = (X) => {
		stackContent.push(`Pop: ${X}, stackContent: ${[...stack]}, Cadena : ${declaration.slice(apuntador)}`);
	};

	while (stack.length > 0) {
		const X = stack.pop();

		if (!X) {
			break;
		}

		const a = declaration[apuntador];

		if (X === a) {
			apuntador++;
		} else if (obtenerNT(X)) {
			const production = obtenerProduccion(X, a);

			if (production) {
				stackContent.push(`Push: ${X}, stackContent: ${[...stack]}, Cadena : ${declaration.slice(apuntador)}`);
				if (production[0] !== 'ε') {
					for (let i = production.length - 1; i >= 0; i--) {
						stack.push(production[i]);
					}
				}
			} else {
				stackContent.push(`Error: ${X} no tiene produccion.`);
				return { result: false, stackContent };
			}
		} else {
			popInfo(X);
			return { result: false, stackContent };
		}
	}
	return { result: apuntador === declaration.length, stackContent };
}

function generarStack(declaration) {
	if (declaration.includes('fnc')) {
		return ['F'];
	} else if (declaration.includes('switch')) {
		return ['S'];
	} else if (declaration.includes('while')) {
		return ['W'];
	} else if (declaration.includes('int')) {
		return ['DI'];
	} else if (declaration.includes('string')) {
		return ['DS'];
	} else if (declaration.includes('bool')) {
		return ['DB'];
	} else if (declaration.includes('float')) {
		return ['DF'];
	} else if (declaration.includes('(')) {
		return ['E'];
	} else {
		return ['LV'];
	}
}

function obtenerProduccion(noTerminal, next) {
	switch (noTerminal) {
		//declarar variable bool
		case 'DB':
			return ['BP', 'DB1'];
		case 'DB1':
			return ['LL', 'DB2'];
		case 'DB2':
			return /[=]/.test(next) ? ['II', 'VB'] : /[,]/.test(next) ? ['CM', 'DB1'] : [];

		//declarar variable float
		case 'DF':
			return ['FL', 'DF1'];
		case 'DF1':
			return ['LL', 'DF2'];
		case 'DF2':
			return /[=]/.test(next) ? ['II', 'DF3'] : /[,]/.test(next) ? ['CM', 'DF1'] : [];
		case 'DF3':
			return ['DD', 'DF4'];
		case 'DF4':
			return ['P', 'DD']
		//declarar variable int
		case 'DI':
			return ['IP', 'DI1'];
		case 'DI1':
			return ['LL', 'DI2'];
		case 'DI2':
			return /[=]/.test(next) ? ['II', 'DD'] : /[,]/.test(next) ? ['CM', 'DI1'] : [];

		//declarar variable string
		case 'DS':
			return ['SR', 'DS1'];
		case 'DS1':
			return ['LL', 'DS2'];
		case 'DS2':
			return /[=]/.test(next) ? ['II', 'DS3'] : /[,]/.test(next) ? ['CM', 'DS1'] : [];
		case 'DS3':
			return ['CL', 'DS4'];
		case 'DS4':
			return ['LL', 'CL']
		//escribir variable
		case 'E':
			return ['PI', 'E1'];
		case 'E1':
			return /[a-z]/.test(next) ? ['LL', 'E4'] : ['CL', 'E2'];
		case 'E2':
			return ['LL', 'E3'];
		case 'E3':
			return ['CL', 'E4'];
		case 'E4':
			return ['PF', 'WR']
		//leer variable
		case 'LV':
			return ['LL', 'L1'];
		//declaracion de funciones
		case 'F':
			return ['FP', 'F1'];
		case 'F1':
			return ['LL', 'F2'];
		case 'F2':
			return ['PI', 'F3'];
		case 'F3':
			return /[a-z]/.test(next) ? ['LL', 'F4'] : ['PF', 'F5'];
		case 'F4':
			return /[)]/.test(next) ? ['PF', 'F5'] : ['CM', 'F3'];
		case 'F5':
			return ['CI', 'F6'];
		case 'F6':
			return /[(]/.test(next) ? ['E', 'CF'] : ['LV', 'CF'];

		//declaracion de switch
		case 'S':
			return ['SP', 'S1'];
		case 'S1':
			return ['PI', 'S2'];
		case 'S2':
			return ['LL', 'S3'];
		case 'S3':
			return ['PF', 'S4'];
		case 'S4':
			return ['CI', 'S5'];
		case 'S5':
			return ['CP', 'S6'];
		case 'S6':
			return /[a-z]/.test(next) ? ['LL', 'S7'] : ['DD', 'S7'];
		case 'S7':
			return ['PI', 'S8'];
		case 'S8':
			return /[(]/.test(next) ? ['E', 'S9'] : ['LV', 'S9'];
		case 'S9':
			return ['PF', 'S10'];
		case 'S10':
			return /[e]/.test(next) ? ['EX', 'CF'] : ['CP', 'S6'];

		//declaracion de while
		case 'W':
			return ['WP', 'W1'];
		case 'W1':
			return ['PI', 'W2'];
		case 'W2':
			return ['LL', 'W3'];
		case 'W3':
			return ['III', 'W4'];
		case 'W4':
			return ['VB', 'W5'];
		case 'W5':
			return ['PF', 'W6'];
		case 'W6':
			return ['CI', 'W7'];
		case 'W7':
			return /[(]/.test(next) ? ['E', 'W8'] : ['LV', 'W8'];
		case 'W8':
			return ['EX', 'CF'];


		//No terminales comunes
		case 'LL':
			return ['L', 'ML'];
		case 'ML':
			return /[a-z0-9_]/.test(next) ? ['L', 'ML'] : ['ε'];
		case 'DD':
			return ['D', 'MD'];
		case 'MD':
			return /[0-9]/.test(next) ? ['D', 'MD'] : ['ε'];

		//Terminales comunes
		case 'BP':
			return ['b', 'o', 'o', 'l']
		case 'C':
			return ['c'];
		case 'CI':
			return ['{'];
		case 'CF':
			return ['}'];
		case 'CM':
			return [','];
		case 'CL':
			return ['"'];
		//
		case 'CP':
			return ['c', 'a', 's', 'e', '_'];
		case 'D':
			return /[0-9]/.test(next) ? [next] : null;
		///
		case 'EX':
			return ['e', 'x', 'i', 't'];
		case 'FL':
			return ['f', 'l', 'o', 'a', 't'];
		case 'FP':
			return ['f', 'n', 'c'];
		case 'II':
			return ['='];
		case 'III':
			return ['=', '='];
		case 'IP':
			return ['i', 'n', 't'];
		case 'L':
			return /[a-z0-9_]/.test(next) ? [next] : null;
		case 'L1':
			return ['.', 'r', 'e', 'a', 'd']
		///
		case 'P':
			return ['.'];
		case 'PI':
			return ['('];
		case 'PF':
			return [')'];
		//
		case 'SP':
			return ['s', 'w', 'i', 't', 'c', 'h'];
		case 'SR':
			return ['s', 't', 'r', 'i', 'n', 'g'];
		case 'VB':
			return /[t]/.test(next) ? ['t', 'r', 'u', 'e'] : ['f', 'a', 'l', 's', 'e'];
		case 'WP':
			return ['w', 'h', 'i', 'l', 'e'];
		case 'WR':
			return ['.', 'w', 'r', 'i', 't', 'e'];
	}
}

function obtenerNT(simbolo) {
	return /[A-Z]/.test(simbolo);
}

function validateVariableDeclaration(input) {
	const declarationWithoutSpaces = input.replace(/\s/g, '');
	const { result, stackContent } = algoritmoAnalisis(declarationWithoutSpaces);

	console.log("Cadena: ", result);
	console.log("Pila:", stackContent);
}

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Ingrese el bloque de codigo: ', (input) => {
	validateVariableDeclaration(input);
	rl.close();
});