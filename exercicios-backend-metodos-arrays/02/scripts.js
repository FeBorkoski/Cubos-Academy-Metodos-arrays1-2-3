const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


function gruposSeparados (nomes, tamanhoDoGrupo){
    const grupos = []
    
        for(let i = 0 ; i<nomes.length; i+tamanhoDoGrupo){
            const grupo = nomes.splice(i,tamanhoDoGrupo)

            grupos.push(grupo);
        }
        let contadorGrupos = 1;
        for(let grupo of grupos){
            console.log(`Grupo ${contadorGrupos}: ${grupo.join(", ")}.`);
            contadorGrupos++;
        }
}
gruposSeparados(nomes, tamanhoDoGrupo);