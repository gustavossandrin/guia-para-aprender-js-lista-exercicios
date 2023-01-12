/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = 'si';

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
entrada = entrada.toUpperCase()
if (entrada === 'S' || entrada === 'SIM' || entrada === 'Y' || entrada === 'YES' || entrada == '1'){
    var resultado = true
}
else{
    var resultado = false
}
console.log(resultado);
