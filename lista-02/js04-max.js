/**
 * Faça um programa que faça a soma de todos os números de uma lista de números e retorne o maior
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [40,1,1,0,-10]       40
 */

// Entrada
var entrada = [1,1,40]
var maior
for (var value in entrada){
    if (value == 0){
        maior = entrada[value]
    }
    else{
        if (entrada[value] > maior){
            maior = entrada[value]
        }
    }

}

console.log(maior)
