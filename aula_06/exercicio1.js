
/*
Exercício 1:
Escreva um programa que calcule a soma de todos os elementos de um array.
*/

// Array de exemplo
let numeros = [10, 20, 30, 40, 50]; // Soma 150 | 5 itens

// Acumulador
let soma = 0;

// Usando `for` para iterar `numeros`
for (i = 0; i < numeros.length; i++) { // i = 0

    // Soma no acumulador
    soma += numeros[i]; // 0

}

// Exibir o resultado usando interpolação (crase)
console.log(`A soma dos números é ${soma}.`)
