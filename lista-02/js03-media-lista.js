/**
 * Faça um programa que faça a media de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]        5.7
 * [1,1,40]             14.0
 */

// Entrada
var entrada = [1,1,40]

var soma = 0

// percorrer a lista e fazer a somatória dos elementos
for (var value of entrada){
    soma += value
}
let media = soma / entrada.length

console.log(media.toFixed(1))
