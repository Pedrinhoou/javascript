function calcularPontuacaoTotal(pontuacoes) {
    let pontuacaoTotal = 0;
    for (let i = 0; i < pontuacoes.length; i++) {
        pontuacaoTotal += pontuacoes[i];
    }
    console.log("Pontuacao total do jogador:", pontuacaoTotal);
}
// Array de pontuações do jogador
const pontuacoesDoJogador = [10, 15, 20, 5, 8];
// Chamando a função para calcular a pontução total do jogador
calcularPontuacaoTotal(pontuacoesDoJogador);