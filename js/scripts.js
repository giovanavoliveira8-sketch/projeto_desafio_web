console.log("Teste /n")

console.log ("Comando de saída")

//COMENTÁRIO DE LINHA SIMPLES

/*
    COMENTÁRIO DE MÚLTIPLAS LINHAS, 
    OU SEJA, POSSO DESCREVER ALGO 
    NESSE TIPO DE COMENTÁRIO...
*/

//CRIANDO VARIÁVEIS
let num = 50
var num2 = 180
const num3 = 450

console.log(num)
console.log(num2)
console.log (num3)

if (true){
    let num4 = 450
    var num5 = 180

    console.log(num4)

    console.log(num)
}

console.log(num5)

num = 5

console.log(num)

num2 = 6

console.log(num2)

//num3= 12

//CONCATENAÇÂO
console.log("Valor de num " -num)
console.log('Valor de num3 ', num3)
console.log(`Valor do num2 ${num2}`)
console.log('A soma dos números ' + (15 + 8))
console.log('A soma dos números ', (15 + 8))
console.log(`A soma dos números ${15+8}`)
console.log('A soma dos números ' + num + num2)
console.log('A soma dos números ', num2 + 8)
console.log(`A soma dos números ${num3 - num2}`)

//OPERADORES MATEMÁTICOS
/*
    + SOMA
    - SUBTRAÇÃO
    * MULTIPLICAÇÂO
    / DIVISÃO
    % MÓDULO (RESTO DA DIVISÃO)
*/

console.log('SOMA DAS VARIÁVEIS ', num +num2 )
console.log('SUBTRAÇÃO DAS VARIÁVEIS ', num3 - num)
console.log('MULTIPLICAÇÂO DAS VARIÁVEIS ', num5 * 2)
console.log('DIVISÃO DE VALORES ', num2 / 5)
console.log('RESTO DA DIVISÂO ', num2 % 2)
//console.log(`RESTO DA DIVISÃO `, $(num3 % 3))

//OPERADORES RELACIONAIS
/*
    == IGUAL
    > MAIOR
    < MENOR
    >= MAIOR IGUAL
    <= MENOR IGUAL
    != DIFERENTE
*/

//OPERADORES LÓGICO
/*
    && E
    || OU 
*/

console.log('TESTE DE RELACIONAIS ', 10 == 5)
console.log('TESTE DE RELACIONAIS ', 10 != 5)
console.log('TESTE DE RELACIONAIS ', 10 > 5)
console.log('TESTE DE RELACIONAIS ', 10 < 5)
console.log('TESTE DE RELACIONAIS ', 10 >= 5)
console.log('TESTE DE RELACIONAIS ', 10 <= 5)
console.log('TESTE DE RELACIONAIS ', (10 > 5) && (15 < 8))
console.log('TESTE DE RELACIONAIS ', (10 > 5) || (15 < 8))

//TESTE LÓGICO
let idade = 25


if (idade >= 18){
    console.log('Maior de idade')
}else{
    console.log('Menor de idade')
}

/** 
 * RENOVAÇÂO DE CNH
   MENOR QUE 18 - NÃO PERMITIDO
   18 ATÉ 49 - 10 ANOS
   50 ATÉ 69 - 5 ANOS
   70 ACIMA - 3 ANOS
*/

if (idade<18){
    console.log(`COM A IDADE DE ${idade}, NÃO É PERMITIDO`)
}else if (idade < 50){
     console.log(`COM A IDADE DE ${idade}, 10 ANOS PARA RENOVAR`)
}else if (idade < 70){     
     console.log(`COM A IDADE DE ${idade}, 5 ANOS PARA RENOVAR`)
}else{  
     console.log(`COM A IDADE DE ${idade}, 3 ANOS PARA RENOVAR`)
}