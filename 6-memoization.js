// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

const prompt = require('prompt-sync')();

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const fatorial = memoize((n) => {
    if (n < 0) {
        throw new Error("Não existe fatorial de número negativo");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
});

// Solicita ao usuário um número e calcula o fatorial usando a função memoizada
let n = Number(prompt("Digite um número: "));
try {
    let resultado = fatorial(n);
    console.log(`O fatorial de ${n} é ${resultado}`);
} catch (erro) { 
    console.log("Erro:", erro.message);
    } // Se o usuário tentar calcular o fatorial de um número negativo, uma exceção será lançada