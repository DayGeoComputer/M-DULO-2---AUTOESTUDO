function valortotal(){
    var numero = Number(document.getElementById("valor").value)
    var turno =  document.querySelector('input[name="turno"]:checked').value;
    var vooDiurno = 200
    var vooNoturno = 100
    var valorFinal = document.getElementById("Valor")

    console.log(numero)
    console.log(turno)

    if(turno == "Diurno"){
        if(numero > 50){
            var total1 = (vooDiurno*0.6)*numero
            console.log(total1)
            valorFinal.innerHTML = total1
        }
        else{
            var total1 = vooDiurno*numero
            console.log(total1)  
            valorFinal.innerHTML = total1
        }
    }
    else {
        if(numero > 50){
            var total2 = (vooNoturno*0.8)*numero
            console.log(total2)
            valorFinal.innerHTML = total2
        }
        else{
            var total2 = vooNoturno*numero
            console.log(total2)
            valorFinal.innerHTML = total2
        }
    }
}