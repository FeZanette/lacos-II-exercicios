// # Exercício 1

// Uma pessoa analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:


// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47


const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for(let i = 0 ; i < array.length ; i++){
    console.log(`\nJogador ${i + 1}: ${array[i]}`);
}


//-------------------------------
// OUTRA FORMA DE FAZER

console.log(" ")
console.log("OUTRA FORMA DE FAZER");

for(let i = 0 ; i < array.length ; i++){
    console.log(`Jogador ${i + 1}`);

    for(let j = 0 ; j < array[i].length ; j++){
        console.log(`${array[i][j]} gols`);
    }
}


//-------------------------------
// FAZENDO COM for in

console.log(" ")
console.log("FAZENDO COM for in");

let contador = 1

for(let i in array){
    console.log(`Jogador ${contador} marcou: ${array[i]} gols`);
    contador++
}


//-------------------------------
// FAZENDO COM for in (OUTRA FORMA)

console.log(" ")
console.log("FAZENDO COM for in DE OUTRA FORMA");

for(let i in array){
    console.log(`Jogador ${Number(i)+1}: ${array[i]}`);
 }


//-------------------------------
// FAZENDO COM for of E indexOf

console.log(" ")
console.log("FAZENDO COM for E indexOf");

for(let i of array){
    console.log(`Jogador ${array.indexOf(i)+1}: ${i}`);
 }