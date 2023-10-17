const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function grupo (nomes, posicao) {   
    const grupo = nomes.slice(posicao, posicao + 3);
    console.log(grupo.join(" - "));

}
grupo(nomes, posicao);