alert('Boas vindas ao jogo do Número Secreto');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativa = 1;



while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas!`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativa++;
    }
}