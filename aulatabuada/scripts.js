function calcular(){
    var numero = window.document.getElementById('num')

    var tabuada = window.document.getElementById('seltab')

    if (numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var n = Number(numero.value)
        let valor
        tabuada.innerHTML = ''
        for (let i = 0; i < 11; i++){
            valor = n * i
            let item = document.createElement('option')
            item.text = `${n} * ${i} = ${valor}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        } 
    }

}