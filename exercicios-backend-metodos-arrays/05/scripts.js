const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente (lista, nome){
    lista.push(nome);
    console.log(lista.join(", "));
}

function atenderPaciente (lista){
    lista.shift();
    console.log(lista.join(", "));
}

function cancelarAtendimento (lista, nome){
    let indexNome = lista.indexOf(nome);
    lista.splice(indexNome, 1);
    console.log(lista.join(", "));
}
cancelarAtendimento(pacientes, "João");
console.log("--------------------------------------------------");
agendarPaciente(pacientes, "Fernando");
console.log("--------------------------------------------------");
atenderPaciente (pacientes);
