const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Rio de Janeiro",
    "Rio de Janeiroooooo",
];

function encontrarPalavras(arrDePalavras) {
    const result = arrDePalavras.reduce(function (acumulador, valorAtual, indice, array) {
        let maiorPalavra = acumulador;
        if (valorAtual.length >= acumulador.length) {
            maiorPalavra = valorAtual;
        }
        return maiorPalavra;
    })
    console.log(result);
}
encontrarPalavras(cidades);