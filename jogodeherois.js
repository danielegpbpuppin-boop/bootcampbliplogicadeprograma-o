// 1. CLASSE GENERICA (Mantida conforme sua regra)
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    if (this.tipo === "mago") ataque = "usou magia";
    else if (this.tipo === "guerreiro") ataque = "usou espada";
    else if (this.tipo === "monge") ataque = "usou artes marciais";
    else if (this.tipo === "ninja") ataque = "usou shuriken";
    else ataque = "usou um ataque genérico";

    return `o ${this.tipo} atacou usando ${ataque}`;
  }
}

// 2. LÓGICA DO DUELO (Encapsulada em uma função)
const tipos = ["mago", "guerreiro", "monge", "ninja"];

window.executarDuelo = function(escolhaIndex) {
    const jogador = new Heroi("Arthur", 20, tipos[escolhaIndex]);
    const indiceSorteado = Math.floor(Math.random() * tipos.length);
    const adversario = new Heroi("Vilão Sombrio", 100, tipos[indiceSorteado]);

    // Limpa a área de resultado anterior
    const resDiv = document.querySelector("#resultado-duelo");
    resDiv.innerHTML = "";

    let log = `<b>--- RESULTADO DO DUELO ---</b><br>`;
    log += `Você: ${jogador.tipo} | Adversário: ${adversario.tipo}<br><br>`;

    const competidores = [jogador, adversario];
    for (let h of competidores) {
        log += h.atacar() + "<br>";
    }

    log += "<br><b>VEREDITO:</b> ";
    if (jogador.tipo === adversario.tipo) {
        log += "Empate! Ambos são mestres na mesma arte.";
    } else {
        log += `${jogador.nome} (o ${jogador.tipo}) venceu este combate!`;
    }

    resDiv.innerHTML = log;
};

// 3. CRIAÇÃO DA INTERFACE NO COLAB
const container = document.createElement("div");
container.style.padding = "15px";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "8px";
container.style.backgroundColor = "#f9f9f9";

let htmlBotoes = "<h3>Escolha seu Herói:</h3>";
tipos.forEach((tipo, index) => {
    htmlBotoes += `<button onclick="executarDuelo(${index})" style="margin: 5px; padding: 10px; cursor: pointer;">${tipo.toUpperCase()}</button>`;
});

htmlBotoes += "<div id='resultado-duelo' style='margin-top: 20px; font-family: monospace;'><i>Aguardando escolha...</i></div>";

container.innerHTML = htmlBotoes;
element.appendChild(container);