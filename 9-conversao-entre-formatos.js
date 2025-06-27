// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

const prompt = require('prompt-sync')()
let pares = [
    ['nome', 'Beatriz'],
    ['idade', 30],
]

function paresParaObjeto(pares) {
    const resultado = {}
    for (const [chave, valor] of pares) {
        resultado[chave] = valor
    }
    return resultado
}

function objetoParaPares(obj) {
    const resultado = []
    for (const chave of Object.keys(obj)) {
        const valor = obj[chave]
        resultado.push([chave, valor])
    }
    return resultado
    }
