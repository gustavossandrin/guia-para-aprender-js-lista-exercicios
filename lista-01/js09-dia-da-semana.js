/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 7
const DIASDASEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo']

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (entrada <= 7 && entrada >= 1 ){
    var resultado = DIASDASEMANA[entrada - 1]
}
else{
    var resultado = 'Entrada inválida.'
}


console.log(resultado)
