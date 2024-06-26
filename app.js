alert('Boas vindas ao jogo do Número Secreto');
let numeroMaximo = 1000;

do {
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(numeroSecreto);
    let chute;
    let tentativa = 1;
    jogar = prompt('Você gostaria de jogar? (s/n): ');

    if (jogar != 's' && jogar != 'S') {
        alert('Obrigado por jogar!');
        break;
    } else {
        while (chute != numeroSecreto) {
            chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
            if (chute == numeroSecreto) {
                let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
                alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);
            } else {
                if (numeroSecreto > chute) {
                    alert(`O número secreto é maior que ${chute}`);
                } else {
                    alert(`O número secreto é menor que ${chute}`);
                }
                tentativa++;
            }
        }
    }
} while (jogar == 's' || jogar == "S");
