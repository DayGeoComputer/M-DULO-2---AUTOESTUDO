//coloquei constante pois as notas não irão mudar
const notas_sortidas=[100, 50, 20, 10, 5, 2, 1]

function calcular(){
    
    var valor= parseInt(document.getElementById("caixa_1").value);
    console.log(valor);
    var texto="";

    //coloquei o for (que é um laço de repetição) para continuar o ciclo até terminar a divisão escrita pela quantidade de notas
    for(var i=0; i<7; i++){
        //coloquei o Math.floor para arredondar para o valor mais baixo. o [i] significa que vai pegar a const das notas_sortidas.
        var quantidade_de_notas = Math.floor(valor/notas_sortidas[i]);
        valor = valor%notas_sortidas[i];
        texto += quantidade_de_notas + " notas de " + notas_sortidas[i] + "<br>";
        console.log(quantidade_de_notas + " notas de " + notas_sortidas[i] + "<br>");
    }
    document.getElementById("resposta").innerHTML += texto;
}