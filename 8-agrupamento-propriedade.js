// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
    { cliente: 'João', total: 100 },
    { cliente: 'Maria', total: 200 },
    { cliente: 'Beatriz', total: 150 },
    { cliente: 'Ana', total: 300 },
    { cliente: 'Lucas', total: 100 }
]

const totalDosClientes = vendas.reduce((total, venda) => {
    return total + venda.total
}, 0)

console.log(totalDosClientes)