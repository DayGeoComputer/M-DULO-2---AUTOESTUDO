var e;
function calcular() {
        e=parseInt(entry.numero.value);
        if(e%2==0){
            alert("valor par");
            entry.t2.value="valor par";
        }

        else{
            alert("Valor impar");
            entry.text.value="valor impar";
        }    
    }