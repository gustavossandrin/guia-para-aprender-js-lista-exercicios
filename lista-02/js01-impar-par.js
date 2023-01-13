/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

// Entrada
var entrada = [1,3,5,7,8]
var resto 
var saida = []

// gerar a lista de saida
for (var value of entrada){
    resto = value % 2
    if (resto === 1){
        saida.push('Ímpar')
    }
    else{
        saida.push('Par')
    }
}

console.log(saida)
