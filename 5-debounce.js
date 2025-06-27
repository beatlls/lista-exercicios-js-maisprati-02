// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

const prompt = require('prompt-sync')();

function debounce(fn, delay = 1000) {
    let timer;
    
    return function(...args) { // Captura o contexto e os argumentos
        clearTimeout(timer);
        
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const minhaFuncao = (texto) => console.log(texto);
const minhaFuncaoDebounced = debounce(minhaFuncao);

// Testando a função debounce
minhaFuncaoDebounced("Bea"); // Esta será cancelada
minhaFuncaoDebounced("Beatr"); // Será cancelada
minhaFuncaoDebounced("Beatriz"); // Esta será executada após 1 segundo
