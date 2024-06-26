alert('Boas vindas ao jogo do Número Secreto');
let numeroSecreto = 8;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);
}
