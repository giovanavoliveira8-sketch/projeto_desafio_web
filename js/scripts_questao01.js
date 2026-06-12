//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT [X] FORMULÁRIO
formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()

    
    const objFormDados =new FormData(formDados)
    
    let n1 = objFormDados.get('num1')
    let n2 = objFormDados.get('num2')
    let n3 = objFormDados.get('num3')

    let media = parseFloat((n1 + n2 + n3)) / parseFloat (3)

    divResultado.innerHTML = `A MÉDIA DOS NÚMEROS DIGITADOS É: ${media}`
    {media.toFixed(2).replace('.',',')}

    formDados.reset()
    
})