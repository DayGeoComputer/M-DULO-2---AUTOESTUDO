//coloquei o # pois estou buscando pelo id
var n1= document.querySelector('#n1')
var n2= document.querySelector('#n2')

// o span não tem # pois o resultado é uma tag.
var resultado= document.querySelector('span')

function somar (){
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function subtração (){
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}

function multiplicação (){
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}

function divisão (){
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}

function resto_da_divisão(){
    resultado.innerHTML = parseInt(n1.value) % parseInt(n2.value)
}
