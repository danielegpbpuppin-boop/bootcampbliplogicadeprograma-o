let continuar;

do {
    // 1. Entrada de variáveis
    let nome = prompt("Qual seu nome de herói?");
    let xp = Number(prompt("Qual seu nível (XP)?"));
    let nivel = "";

    // 2. Estrutura de decisão
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "Desconhecido";
    }

    // 3. Exibição do resultado
    let resultado = `O Herói de nome **${nome}** está no nível de **${nivel}**`;
    alert(resultado);
    console.log(resultado);

    // 4. Controle do laço
    continuar = prompt("Deseja continuar? (sim/não)").toLowerCase();

} while (continuar === "sim");

alert("Programa finalizado!");