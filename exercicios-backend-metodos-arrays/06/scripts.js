const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Fernando",
        pets: ["Abigail"],
    },
]


function encontrarDono(lista, nomeDoCao) {
    let temDono = false;
    for (let usuario of lista) {
        if (usuario.pets.includes(nomeDoCao)) {
            console.log(`O dono(a) do(a) ${nomeDoCao} é o(a) ${usuario.nome}.`)
            temDono = true;
        }
    }
    if (!temDono) {
        console.log(`Que pena, ${nomeDoCao}, não encontramos seu dono(a).`)
    }
}
encontrarDono(usuarios, "Abigail");
console.log("-------------------------------------------");
encontrarDono(usuarios, "Canela");