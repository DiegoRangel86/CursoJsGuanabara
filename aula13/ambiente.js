/*
//Estrutura de repetição com teste lógico no início
var c = 1
while (c <= 10){
    console.log(`Passo ${c}`)
    c++
}
*/

/*
//Estrutura de repetição com teste lógico no final
var c = 1
do{
    console.log(`Passo ${c}`)
    c++
} while (c <= 1)
*/

console.log('Vai começar!')
for (let i = 1; i <= 10; i++) {
    console.log(`Passo ${i}`)
}
console.log('Fim!')
/*

var parcelas = 12
var patual = 0
var soma = 0
var emprestimo = 1000

function calcula(){
    soma += emprestimo / parcelas
}

while (patual < parcelas){
    calcula()
    patual++
}

console.log(`O valor da soma é: ${soma} que foi calculada em ${patual} iterações!`)
*/