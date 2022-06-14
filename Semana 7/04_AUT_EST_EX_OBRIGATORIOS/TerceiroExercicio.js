var resultado1 = "Este formato não é aceito, por favor, siga o exemplo abaixo: (DDD)0000-0000"
var resultado = "Formato correto"

function conferirnumero() {
    var numero = document.getElementById("celular").value 
    if  ((numero[0] == "(") && (numero[3] == ")") && (numero[8] == "-")) {
        document.getElementById("formatocerto").innerHTML = resultado
    }
    
    else if (numero.length < 13) {
        document.getElementById("formatoerrado").innerHTML = resultado1
    }

    else if (numero.length > 13) {
        document.getElementById("formatoerrado").innerHTML = resultado1
    }
}