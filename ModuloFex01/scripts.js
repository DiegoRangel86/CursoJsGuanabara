var col = []
var resp = window.document.getElementById('selres')
var item
var reposta = window.document.querySelector('div#res')
function adicionar(){
    let num = window.document.getElementById('txtnum')

    if (Number(num.value) == 0 || num.value.length == 0 || Number(num.value) > 100){
        window.alert(`Favor informar um valor entre 1 e 100. Número informado: ${num.value}!`)    
    } else {
        if (col.indexOf(num.value) != -1){
            window.alert(`O valor ${num.value} já foi informado!`)
        } else {   
            col.push(num.value)
            item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            item.value = `tab${col.length}`
            resp.appendChild(item)
        }    
    }
    //Limpar o valor adicionado
    num.value = ''
    //Colocar o foco no campo para digitação
    num.focus()
}

function finalizar(){
    if (col.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        let cadastrado = col.length
        col.sort()
        let maior = col[cadastrado- 1]
        let menor = col[0]
        let soma = 0
        let media = 0

        for(let c in col){
            soma += Number(col[c])
        }

        media = soma / cadastrado

        reposta.innerHTML = `<p>Temos: ${cadastrado} números cadastrados, o maior é ${maior}, o menor é ${menor}, a soma é ${soma} e a média é ${media}.</p>`
    }
}