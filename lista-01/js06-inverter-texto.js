/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = 'gustavo'

// gere a variável invertido de forma a transforma a entrada na saída esperada
var tamanhoVariavel = entrada.length - 1
var invertido = ''
for (var caracter of entrada){
     invertido += entrada[tamanhoVariavel]
     tamanhoVariavel--
}


console.log(invertido)
