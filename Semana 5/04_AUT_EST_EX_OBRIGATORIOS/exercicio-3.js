function ordenar() {
    var resultado = ""
    var lista = document.querySelector("#numeros").value;
    var arrayLista = lista.split(",")
    
    /*Ordena a lista, ou seja, sempre que o número estiver separado por vírgula, o comando lista.split ler a virgula não mais como uma
    string, mas agora ver que são pontos diferentes*/
    arrayLista.sort(
        function (a, b) {
        return a - b;
    });
    
    for (i = 0; i != arrayLista.length; i++) {
        resultado += " " + arrayLista[i];
    }

    /*Este é o laço que realmente conta a posição do número escolhido na lista*/
    var posicao_do_numero = document.querySelector("#posicao_do_numero").value;
    var i
    var j
    var focoPosicao = 1

    for (j = 0; posicao_do_numero != arrayLista[j]; j++) {
        focoPosicao++
    }

    /*Imprime na tela o resultado*/
    document.getElementById("resposta_1").innerHTML = `A sequencia ordenada é ${resultado}`;
    document.getElementById("resposta_2").innerHTML = `O número escolhido está na posição ${focoPosicao}`;
}