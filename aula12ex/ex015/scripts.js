function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resposta = window.document.querySelector('div#res')

if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] verique os dados e tente novamente!')
    resposta.innerHTML = 'Preencha os dados acima para ver o resultado!'
}else {
    var fsex = document.getElementsByName('rdsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    //Criando elemento imagem direto no JS
    var img = document.createElement('img')
    //Setando um id para o elemento da imagem
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'criancah.jpg')    
        } else if(idade < 21){
            //Jovem
            img.setAttribute('src','jovemh.jpg')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src','adultoh.jpg')
        } else{
            //Idoso
            img.setAttribute('src','idoso.jpg')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','criancam.jpg')    
        } else if(idade < 21){
            //Jovem
            img.setAttribute('src','jovemm.jpg')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src','adultom.jpg')
        } else{
            //Idoso
            img.setAttribute('src','idosa.jpg')
        }
    }
    resposta.style.textAlign = 'center'    
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos!`    
    resposta.appendChild(img).style.padding = '30px' 
}    
}