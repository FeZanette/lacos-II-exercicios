// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

// Exemplo com entrada **`7`**:
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70

// const numero = Number(prompt("Digite um número"))
// console.log(`Tabuada do ${numero}`);
// const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

// for(let i in arrayNumeros){
//     let multiplicacao = numero * (Number(i) + 1)
//     console.log(`"${numero} x ${(Number(i) + 1)} = ${multiplicacao}"`);
// }

// //----------------------------------------
// // OUTRA FORMA DE FAZER USANDO in

// console.log(" ")
// console.log("Outra forma de fazer usando in");

// for(let i in arrayNumeros){
//     let multiplicacao = numero * (Number(arrayNumeros[i]))
//     console.log(`"${numero} x ${arrayNumeros[i]} = ${multiplicacao}"`);
// }

// //----------------------------------------
// // OUTRA FORMA DE FAZER USANDO in

// console.log(" ")
// console.log("Outra forma de fazer usando in");
// for (let i in arrayNumeros) {
//     console.log(`${numero} x ${arrayNumeros[i]} = ${arrayNumeros[i] * numero}`);
// }


// //----------------------------------------
// // USANDO APENAS O for PARA FAZER

// console.log(" ")
// console.log("Outra forma de fazer usando apenas o for");

// for(let i = 1; i <= 10; i++){
//     let multiplicacao = numero * i
//     console.log(`${numero} x ${i} = ${multiplicacao}`);
// }

//----------------------------------------
// USANDO APENAS O for PARA FAZER

// console.log(" ")
// console.log("Outra forma de fazer usando while");

let verdade = true

while (verdade) {
    console.log("----Tabuada----");
    const numero = Number(prompt("Digite um número"))
    const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

    for (let i in arrayNumeros) {
        console.log(`${numero} x ${arrayNumeros[i]} = ${arrayNumeros[i] * numero}`);
    }
    
    verdade = confirm("Gostaria de continuar?")

    if(!verdade){
        break
    }
}