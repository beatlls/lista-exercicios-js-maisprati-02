// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
// let numeroSecreto = Math.floor(Math.random() * 100) + 1


console.log("Bem-vindo ao jogo de adivinhação! Tente adivinhar o número secreto entre 1 e 100.")


let tentativas = 0
let palpite

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Digite seu palpite:"))
    if (palpite > numeroSecreto) {
        console.log("O número secreto é menor que", palpite)
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior que", palpite)
    }
    
    tentativas++
}

console.log("Parabéns! Você acertou o número secreto em", tentativas, "tentativas!")