//Vetor/Array

/*
let num = [5, 8, 4]
//Adicionar valor no array informando a posição
num[3] = 6
//Adicionar valor no array na última posição
num.push(7)
//Ordenar o array
num.sort()
//Posições do array
let pos = num.length - 1

//Maior número do array
console.log(num[pos])
*/

/*
let n = []
for (let c = 0;c <= 100;c++){
    n.push(c)
}

for (let c = 0; c <= n.length; c++){
    console.log(n[c])
}
*/

let num = []
for (let c = 0;c <= 100;c++){
    num.push(c)
}

//Para cada posição dentro de num
for (let pos in num){
    //escreva
    console.log(num[pos])
}

//Busca o index de um determinado valor
let valor = 99
let i = num.indexOf(valor)
console.log(`A posição do valor ${valor} é ${i}!`)
