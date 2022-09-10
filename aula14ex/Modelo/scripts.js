function contar() {
    //Recupera o valor de inicio
    var inicio = window.document.getElementById('numinicial')
    //Recupera o valor de fim
    var fim = window.document.getElementById('numfinal')
    //Recupera o passo
    var passo = window.document.getElementById('passo')

    //Recupera o elemento de resposta
    var resposta = window.document.querySelector('div#res')

    //Inicializando
    resposta.innerHTML = ''

    //Testando os valores inputados

    //Inicio
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

}