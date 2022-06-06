const { response } = require("express")

const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click',() => {
    popup.style.display = 'block'
})

popup.addEventListener('click', () =>{
    popup.style.display = 'none'
})

function tempo (req,res){
    const dynamicDate = new Date();
    res.json({
        date: dynamicDate.toGMTString()
    })
}




/*
const curriculo = {
    experiencias:[
        {
            empresas_contratantes: [Inteli, Colégio_Gomes_Pereira,
            Curso_PeC],
            cargos_obtidos: [estagiario, professor, desenvolvedor],
        }
    ],
    tempo_de_trabalho:[
        {
            tempo: [até_1_ano, entre_1_a_3_anos, mais_que_3_anos]
        }
    ]
};

function nova_experiencia ({owner, content}){
    curriculo.experiencias.push({
        owner: dados.owner,
        content: dados.content
    });
    criar_experiencia({owner:'Inteli', content: 'estagiario'})
    
    }
    console.log(curriculo)
    */