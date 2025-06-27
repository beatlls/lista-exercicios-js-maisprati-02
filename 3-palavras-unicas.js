// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

let frase = "olá mundo teste"
let palavras = frase.split(" ")
let palavrasUnicas = []

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    let cont = 0
    
    for (let j = 0; j < palavras.length; j++) {
        if (palavras[j] === palavra) {
            cont++
        }
    }
    
    if (cont === 1) {
        palavrasUnicas.push(palavra)
    }
}

console.log(palavrasUnicas)