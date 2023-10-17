const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificaPalavraInvalida = palavras => {
    return palavras.some(palavra => palavra.length > 5);
};

if (verificaPalavraInvalida(palavras)) {
    console.log("existe palavra inválida");
} else {
    console.log("array validado");
}
