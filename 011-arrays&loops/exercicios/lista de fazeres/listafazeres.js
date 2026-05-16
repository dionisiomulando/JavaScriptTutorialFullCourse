let listaFazeres = [];
function lista_Fazeres() {      
    let listatotal = '';
    for (let i = 0; i < listaFazeres.length; i++){
        let fazer = listaFazeres[i];
        let html = `
        <p> 
            ${fazer} 
            <button onclick="
                listaFazeres.splice(${i}, 1);
                lista_Fazeres();
            "> Eliminar </button>
        </p>`;
        listatotal += html;
    }
    console.log(listatotal)
    document.querySelector('.js-lista-fazer-div').innerHTML = listatotal;
}
function addAtividade() {
    let atividade = document.querySelector('.js-nome-atividade');
    let tipoAtividade = atividade.value;
    listaFazeres.push(tipoAtividade);
    console.log(listaFazeres);

    atividade.value = '';

    lista_Fazeres()
}