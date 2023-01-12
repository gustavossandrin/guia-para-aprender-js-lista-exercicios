/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'a'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (entrada === 'a' || entrada === 'e' || entrada === 'i' || entrada === 'o' || entrada === 'u'){
    var resultado = 'vogal'
}
else {
    var resultado = 'consoante'
}

console.log(resultado)
