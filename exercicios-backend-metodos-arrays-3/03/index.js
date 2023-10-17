const numeros = [1, 98, -76, 9000, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce(function (acumulador, valorAtual, indice, array) {
    let maior = acumulador;
    if (valorAtual > acumulador) {
        maior = valorAtual;
    }
    return maior;
})
console.log(maiorNumero);