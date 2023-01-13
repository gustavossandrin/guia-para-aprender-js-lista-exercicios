/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [40,42,1,0,-10]
var segundoMaior, maior, aux
for (var valor in entrada){
    if (valor == 0){
        maior = entrada[valor]
        continue
    }
    if (valor == 1){
        if (entrada[valor] > maior){
            segundoMaior = maior
            maior = entrada[valor]
            continue
        }
        segundoMaior = entrada[valor]
        continue
    }
    if (entrada[valor] > maior){
        segundoMaior = maior
        maior = entrada[valor]
        continue
    }
    if (entrada[valor] > segundoMaior){
        segundoMaior = entrada[valor]
    }
}


console.log(segundoMaior)
