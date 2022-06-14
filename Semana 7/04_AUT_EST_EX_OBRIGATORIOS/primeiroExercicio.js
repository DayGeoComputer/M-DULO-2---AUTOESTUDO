var quantidade = 0
var resultado
var valor = 0
var precoDaUnidade = 5


function adicao() {
    quantidade += 1;
    valor += 5;
    document.getElementById("valor").innerHTML = quantidade;
    document.getElementById("precoFinal").innerHTML = (Number(quantidade)*precoDaUnidade);
    document.getElementById("produto").value = quantidade;
}

function subtracao() {
    quantidade -= 1;
    valor -= 5;
    document.getElementById("valor").innerHTML = quantidade;
    document.getElementById("precoFinal").innerHTML = (Number(quantidade)*precoDaUnidade);
    document.getElementById("produto").value = quantidade;
}
