function contar() {
    //Recupera o valor de inicio
    var inicio = window.document.getElementById('numinicial')
    //Recupera o valor de fim
    var fim = window.document.getElementById('numfinal')
    //Recupera o passo
    var passo = window.document.getElementById('passo')

    //Recupera o elemento de resposta
    var resposta = window.document.querySelector('div#res')

    //Testando os valores inputados
    if (
        //Nada informado
        Number(inicio.value.length) == 0 || 
        Number(fim.value.length) == 0 || 
        Number(passo.value.length) == 0
    )
    {
        window.alert('[ERRO] Faltam dados')           
        resposta.innerHTML = 'Impossível contar!' 
    } else{
        resposta.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //emoji https://unicode.org/emoji/charts-14.0/full-emoji-list.html

        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        //Contagem crecsente
        if (i < f){
            for (let c = i; c <= f; c += p) {
                resposta.innerHTML += `${c} \u{1F449}`
            }
        }
        //Contagem regressiva
        else{
            for (let c = i;c >= f; c -= p){
                resposta.innerHTML += `${c} \u{1F449}`
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    }


/*
    //Testando os valores inputados
    if (
        //Nada informado
        Number(inicio.value.length) == 0 || 
        //Inicio não pode ser menor que zero
        Number(inicio.value) < 0 || 
        //Inicio não pode ser maior que final
        Number(inicio.value) > Number(fim.value) && Number(fim.value) > 0){
            window.alert('[ERRO] Dados Inválidos [INICIO]')
    }

    //Fim
    if (
        //Nada informado
        Number(fim.value.length) == 0 || 
        //Fim não pode ser menor que zero
        Number(fim.value) < 0 || 
        //Fim não pode ser menor que o passo
        Number(fim.value) < Number(passo.value)
    ){
            window.alert('[ERRO] Dados Inválidos [FIM]')
    }

    //Inicializando
    resposta.innerHTML = ''
    
    //Calcular os passos
    var valor = Number(inicio.value)

    do {        

        if (valor == Number(inicio.value)){
            resposta.innerHTML += valor
        } else {
            if (valor <= Number(fim.value)){
                resposta.innerHTML += valor    
            }
    
        }

        valor += Number(passo.value)

    } while (valor <= Number(fim.value));
*/    

}