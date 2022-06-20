function calcular(){
    var elemento1 = document.getElementById("text1").value; 
    var elemento2 = document.getElementById("text2").value;
    var elemento3 = document.getElementById("text3").value;

    var lista = [];
    lista.push(elemento1, elemento2, elemento3);
    lista.sort();

    document.getElementById("ordemCerta").innerHTML = "A ordem alfabética dos elementos é " + lista[0] + ", " + lista[1] + ", " + lista[2] + "."
}