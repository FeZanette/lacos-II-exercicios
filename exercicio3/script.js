// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// **Utilize o for...of para resolver**

// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"



const rankingBtWomen = ["Giulia Gasparri","Ninny Valentini","Rafaella Miiller","Patricia Diaz","Nicole Nobile"]
let posicao = 1

for(const ranking of rankingBtWomen){
    console.log(`"${posicao} - ${ranking}"`);
    posicao ++;
}


//------------------------------------------------

// OUTRA FORMA DE RESOLVER USANDO for of

console.log(" ")
console.log("Outra forma de resolver usando for of");

for(let i of rankingBtWomen){
    console.log(`${rankingBtWomen.indexOf(i) + 1} - ${i}`);
}


//------------------------------------------------

// RESOLVENDO USANDO APENAS FOR

console.log(" ")
console.log("Usando apenas for");

for(i = 0; i < rankingBtWomen.length; i++){
    console.log(`"${i + 1} - ${rankingBtWomen[i]}"`);
}


//------------------------------------------------

// RESOLVENDO ATRAVÉS DE FUNCTION

console.log(" ")
console.log("Resolvendo usando function");

function rancking (){ 
    const rankingBtWomen = ["Giulia Gasparri","Ninny Valentini","Rafaella Miiller","Patricia Diaz","Nicole Nobile"] 
    
    for(let i = 0; i < rankingBtWomen.length; i++){ 
        console.log(`${i + 1} - ${rankingBtWomen[i]}`); 
    }
}
rancking()