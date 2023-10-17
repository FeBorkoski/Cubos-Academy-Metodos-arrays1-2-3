const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutas1 = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


function inverter(frutas) {
    frutas1.reverse();
    console.log(frutas);
};

inverter(frutas1);

function retirar(frutas) {
    frutas.shift();
    frutas.pop();
    frutas.push("Melão");
    console.log(frutas);

}
retirar(frutas);