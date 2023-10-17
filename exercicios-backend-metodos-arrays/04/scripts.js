const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimento (lista, operacao, nome) {
    if (operacao === "agendar"){
        lista.push(nome);
        console.log(lista.join(", "));
    }else if (operacao === "atender"){
        lista.shift();  
        console.log(lista.join(", "));
}
}
atendimento(pacientes, "agendar", "Fernando");
console.log("--------------------------------------------------------");
atendimento(pacientes, "atender");