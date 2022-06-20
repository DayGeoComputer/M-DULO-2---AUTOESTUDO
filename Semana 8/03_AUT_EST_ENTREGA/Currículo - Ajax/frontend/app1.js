const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
{
button.addEventListener('click',() => {
    popup.style.display = 'block'
})

popup.addEventListener('click', () =>{
    popup.style.display = 'none'
})}

const { response } = require("express")
var getDBResDiv = "#getDB"

function TestGETDB(){
    console.log("teste");
    var url = "http://127.0.0.1:3040/projetos";
    var resposta;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    resposta = JSON.parse(xhttp.responseText);
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    console.log(xhttp.responseText);
}