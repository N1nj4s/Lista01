var saldoInicial = 500.0;
var valorCheque = parseFloat(prompt("Digite o valor do cheque que entrou:"));
var novoSaldo = saldoInicial + valorCheque;

console.log("O novo saldo do cliente é de R$" + novoSaldo.toFixed(2));