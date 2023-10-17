const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const cidadesComAte8Caracteres = cidades.filter(cidade => cidade.length <= 8);

const resultadoFormatado = cidadesComAte8Caracteres.join(', ');

console.log(resultadoFormatado);