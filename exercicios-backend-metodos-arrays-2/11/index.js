const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtrarNomesA = (nomes) => {
    resultado = nomes.filter((nome) => {
        return nome[0] === "A" || nome[0] === "a"
    });
    console.log(resultado);
}
filtrarNomesA(nomes);