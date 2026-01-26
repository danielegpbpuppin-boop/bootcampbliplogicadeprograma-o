// 1. A Função: Criamos a "máquina" que calcula o nível
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // A função entrega os dois valores de volta para quem a chamou
    return { saldoVitorias, nivel };
}

// 2. O Laço de Repetição: Onde o programa interage com o usuário
let continuar;

do {
    let vitoriaInput = Number(prompt("Qual a quantidade de vitórias?"));
    let derrotaInput = Number(prompt("Qual a quantidade de derrotas?"));

    // Chamando a função e guardando o resultado
    let resultadoCalculo = calcularNivel(vitoriaInput, derrotaInput);

    // 3. Exibição do resultado usando os dados retornados pela função
    let mensagem = `O Herói tem saldo de **${resultadoCalculo.saldoVitorias}** e está no nível de **${resultadoCalculo.nivel}**`;
    
    alert(mensagem);
    console.log(mensagem);

    continuar = prompt("Deseja continuar? (sim/não)").toLowerCase();

} while (continuar === "sim" || continuar === "s");

alert("Programa finalizado!");