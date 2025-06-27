// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')()

let n = Number(prompt("Digite um número: "))

function fatorial(n) {
    if(n < 0) {
        throw new Error("Não existe fatorial de número negativo")
    } else if(n === 0) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

// Solicita ao usuário um número e calcula o fatorial
try {
    let resultado = fatorial(n)
    console.log(`O fatorial de ${n} é ${resultado}`)
} catch (erro) {
    console.log("Erro:", erro.message)
}
