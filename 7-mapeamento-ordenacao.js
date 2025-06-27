// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
    { nome: "Sabão", preco: 10 },
    { nome: "Detergente", preco: 20 },
    { nome: "Amaciante", preco: 30 },
    { nome: "Desinfetante", preco: 15 }
]

function obterNomesOrdenadosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome)
}

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos)
console.log(nomesOrdenados)