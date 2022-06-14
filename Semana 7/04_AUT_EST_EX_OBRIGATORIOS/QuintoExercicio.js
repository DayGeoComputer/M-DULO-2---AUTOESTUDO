function CalcularNotas(){
    var numerodealunos = Number(document.getElementById("numerodealunos").value)
    var notaProva = (document.getElementById("notaProva").value).split(",")
    var notaTrabalho = (document.getElementById("notaTrabalho").value).split(",")

    class Aluno{
    constructor(
        nome,
        notaProva,
        notaTrabalho,
        media, 
    ){
        this.nome = nome;
        this.notaProva = notaProva;
        this.notaTrabalho = notaTrabalho;
        this.media = media;
    }
    }

    var listaAlunos = []
    
    for (var i = 0; i <= numerodealunos -1; i++){
        var aluno = new Aluno(
            `aluno${i}`,
            Number(notaProva[i]),
            Number(notaTrabalho[i]),
            ((Number(notaProva[i])*2)+(Number(notaTrabalho[i])*3))/2
        )
        listaAlunos.push(aluno)
        }

        var valorProva = 0
        var valorTrabalho = 0

    for (var j = 0; j < notaProva.length; j++){
        valorProva += Number(notaProva[j])
    }

    for (var k = 0; k < notaTrabalho.length; k++){
        valorTrabalho += Number(notaTrabalho[k])
    }

        var mediaProva = valorProva/numerodealunos
        var mediaTrabalho = valorTrabalho/numerodealunos
        var mediaGeral = (mediaProva + mediaTrabalho)/ 2

        document.getElementById('mediaGeral').innerHTML = mediaGeral
        document.getElementById('mediaTrabalhos').innerHTML = mediaProva
        document.getElementById('mediaProvas').innerHTML = mediaTrabalho

        var maiorTrabalho = Math.max(...notaTrabalho)
        document.getElementById('maiorTrabalho').innerHTML = maiorTrabalho

        var menorTrabalho = Math.min(...notaTrabalho)
        document.getElementById('menorTrabalho').innerHTML = menorTrabalho

        var maiorProva = Math.max(...notaProva)
        document.getElementById('maiorProva').innerHTML = maiorProva

        var menorProva = Math.min(...notaProva)
        document.getElementById('menorProva').innerHTML = menorProva
}