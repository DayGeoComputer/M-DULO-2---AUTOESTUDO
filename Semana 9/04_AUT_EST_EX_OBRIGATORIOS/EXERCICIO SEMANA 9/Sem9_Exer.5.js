function numerosPrimo(){
    var i = document.getElementById("n1").value;
    var limite = document.getElementById("n2").value;
    var lista = [];

    while(i <= limite){
        let primo = true;
        i++
        for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor == 0){
                primo = false;
                break;    
            }    
        }

        if (primo){
            lista.push(i);
        } 

        document.getElementById("numerosPrimos").innerHTML = "Os números primos desse intervalo são " + lista; 
    }
}