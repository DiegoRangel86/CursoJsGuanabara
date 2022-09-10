function verificar(){

    //Recupera a data corrente
    var data = new Date()
    //Recupera o ano YYYY corrente
    var ano = data.getFullYear()
    //Recupera o ano digitado
    var fano = window.document.getElementById('txtano')
    //Busca o elemento da DIV de resposta
    var resposta = window.document.querySelector('div#res')

    /*Efetua validação no ano digitado:
        - Ano não pode vazio 
        - Ano não pode ser maior que o ano corrente
     */   
    if (fano.value.length == 0 || fano.value > ano) {
        //Envia um alert de ERRO
        window.alert('[ERRO] verique os dados e tente novamente!')
        //Atualiza a mensagem para retomar a inserção dos dados
        resposta.innerHTML = 'Preencha os dados acima para ver o resultado!'
    } else {
        //Recupera o elemento radion button
        var fsex = document.getElementsByName('rdsex')
        //Calcula a idade
        var idade = ano - Number(fano.value)
        //Cria variável atribuindo vazio
        var genero = ''
        //Criando elemento imagem direto no JS
        var img = document.createElement('img')
        //Setando um id para o elemento da imagem
        img.setAttribute('id', 'foto')

        //Verifica se o radion button para masculino está setado
        if (fsex[0].checked){
            //Atribui o genero masculino
            genero = 'Homem'
            //Verifica idade para definição da imagem a ser utilizada
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
        } 
        //Verifica se o radion button para feminino está setado    
        else if (fsex[1].checked){
            genero = 'Mulher'
            //Verifica idade para definição da imagem a ser utilizada
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