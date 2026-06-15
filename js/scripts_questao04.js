//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT [X] FORMULÁRIO
formDados.addEventListener ('submit', (evt)=>{
    evt.preventDefault()

    
    const objFormDados =new FormData(formDados)
    
    let distancia = objFormDados.get('distancia')
    let consumo = objFormDados.get('consumo')
    let preco = objFormDados.get('preco')

    let gastoCombustivel = distancia /consumo
    let valorTotal = preco * gastoCombustivel

    divResultado.innerHTML = `A quantidade de combustível necessário para percorrer o trajeto é de ${gastoCombustivel.toFixed(2).replace('.',',')}, Valor total a pagar com combustível é de ${valorTotal.toFixed(2).replace('.',',')}`

    formDados.reset()
    
})