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

const { response } = require("express")