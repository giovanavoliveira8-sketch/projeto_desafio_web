//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT [X] FORMULÁRIO
formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()

    
    const objFormDados =new FormData(formDados)
    
    let nota1 = objFormDados.get('nota1')
    let nota2 = objFormDados.get('nota2')
    let nota3 = objFormDados.get('nota3')

    let media = parseFloat((nota1 + nota2 + nota3)) / 3

    if(media >= 6){
        divResultado.innerHTML = 'APROVADO!!'
    }else{
        divResultado.innerHTML = 'REPROVADO!!'
    }

    formDados.reset()
    
})