let pontuacao = JSON.parse(localStorage.getItem('pontuacao')) || {
        vitoria: 0,
        derrota: 0,
        empate: 0
    }
atuarizaResultado();

function PPT(resultEscolha) {
    let resultJogoPPT = jogoPPT();
    let veredito = ''; // Declarando a variável que faltava
    
    if (resultEscolha === 'Pedra') {
        if (resultJogoPPT === 'Tesoura') {
            veredito = 'Ganhou';
        } else if (resultJogoPPT === 'Papel') {
            veredito = 'Perdeu';
        } else if(resultJogoPPT === 'Pedra'){
            veredito = 'Empate';
        } 
    } else if (resultEscolha === 'Papel') {
        if (resultJogoPPT === 'Pedra') {
            veredito = 'Ganhou';
        } else if(resultJogoPPT === 'Papel') {
            veredito = 'Empate';
        } else if(resultJogoPPT === 'Tesoura'){
            veredito = 'Perdeu';
        }
    } else if(resultEscolha === 'Tesoura'){
        if (resultJogoPPT === 'Papel') {
            veredito = 'Ganhou';
        } else if(resultJogoPPT === 'Tesoura') {
            veredito = 'Empate';
        } else if(resultJogoPPT === 'Pedra'){
            veredito = 'Perdeu';
        }
    }

    if (veredito === 'Ganhou') {
        pontuacao.vitoria += 1;
    } else if (veredito === 'Perdeu') {
        pontuacao.derrota += 1;
    } else if (veredito === 'Empate') {
        pontuacao.empate += 1;
    }

    localStorage.setItem('pontuacao', JSON.stringify(pontuacao));

    atuarizaResultado();

    document.querySelector('.js-resultado').innerHTML = `${veredito}`

    document.querySelector('.js-escolhas').innerHTML = `Você
        <img src="../img/${resultEscolha}-ppt.png" class="css-img">
        <img src="../img/${resultJogoPPT}-ppt.png" class="css-img">
        Computador`;         
}

function atuarizaResultado() {
    document.querySelector('.js-result-ppt').innerHTML = `Vitoria: ${pontuacao.vitoria}, Derrota: ${pontuacao.derrota}, Empate: ${pontuacao.empate}`;
}

function jogoPPT() {
    let resultJogoPPT = ''; 
    let numero = Math.random();

    if (numero >= 0 && numero < 1/3) {
        resultJogoPPT = 'Pedra';
    } else if (numero >= 1/3 && numero < 2/3) {
        resultJogoPPT = 'Papel'; // Corrigido: antes estava resultEscolha
    } else {
        resultJogoPPT = 'Tesoura'; // Corrigido: simplificado para pegar o restante
    }

    return resultJogoPPT;
}
        