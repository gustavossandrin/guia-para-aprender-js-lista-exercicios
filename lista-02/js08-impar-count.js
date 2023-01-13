/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1,2,3,4,5,6,7]
var impares = 0
var pares = 0
// processamento
for (var value of entrada){
    if (value % 2 == 1){
        impares += 1
        continue
    }
    pares += 1
}

console.log(`${impares} ${pares}`)
