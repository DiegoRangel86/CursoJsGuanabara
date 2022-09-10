/*
var idade = 66

if (idade < 16){
    console.log('Não vota!')
} else {
    if (idade < 18){
        console.log('Voto opcional!')
    } else {
        console.log('Voto obrigatótio!')    
    }    
}

if (idade < 16){
    console.log('Não vota!')
} else if (idade < 18 || idade > 65){
        console.log('Voto opcional!')
} else {
    console.log('Voto obrigatótio!')    
}

var hora = new Date().getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
*/

var diasemana = new Date().getDay()
/*
    Domingo => 0
    Segunda => 1
    Terça   => 2
    Quarta  => 3
    Quinta  => 4
    Sexta   => 5
    Sábado  => 6    
*/

switch (diasemana) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;        
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')            
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('Não definido')  
        break;      
}

console.log('Fim')
