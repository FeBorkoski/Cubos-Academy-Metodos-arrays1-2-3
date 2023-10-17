//Crescente
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const crescente = numeros.sort((maiorNumero,numeros)=>{
    return maiorNumero - numeros
})
console.log(crescente);

// Descrescente 
const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const decrescente = numeros.sort((maiorNumero,numeros)=>{
    return numeros - maiorNumero
})
console.log(decrescente);

// Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.
const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numeros3.sort((a,b)=>{
return a.toString().localeCompare(b.toString())
})
console.log(numeros3);


// Ordenado o array em ordem alfabetica
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const frutasCrescente = frutas.sort((a,b)=>{
    return a.localeCompare(b)
})
console.log(frutasCrescente);

// Ordenado o array em ordem alfabetica de tras para frente
const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const frutasDecrescente = frutas.sort((a,b)=>{
    return b.localeCompare(a)
})
console.log(frutasDecrescente);

// Ordenado o array em ordem alfabetica de acordo com a quantidade de caracteres
const frutas3 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const frutasOrdem = frutas.sort((a,b)=>{
    return a.length - b.length
})
console.log(frutasOrdem);