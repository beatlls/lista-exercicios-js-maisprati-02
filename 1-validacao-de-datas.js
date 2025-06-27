//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//formarem uma data real (meses de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.

const prompt = require('prompt-sync')()

function ehBissexto(ano) {
    if(ano % 400 === 0) {
        return true
    } else if(ano % 100 === 0) {
        return false
    } else if(ano % 4 === 0) {
        return true
    } else {
        return false
    }
}

let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mês (em número): "));
let ano = Number(prompt("Digite o ano: "));

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    if (mes === 2) {
        if (ehBissexto(ano)) {
            return dia <= 29;
        } else {
            return dia <= 28;
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        return dia <= 30;
    } else {
        return dia <= 31;
    }
}

console.log(ehDataValida(dia, mes, ano));
