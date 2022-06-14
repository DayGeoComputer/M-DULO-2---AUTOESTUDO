function inverter() {
    var caixa1 = document.getElementById("caixa1").value;
    var caixa2 = document.getElementById("caixa2").value;

    document.getElementById("caixa1").value = caixa2;
    document.getElementById("caixa2").value = caixa1;
}