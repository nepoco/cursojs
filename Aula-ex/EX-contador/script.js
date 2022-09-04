function contar(){
    var inicio = document.querySelector('#inic')
    var final = document.querySelector('#final')
    var passo = document.querySelector('#cont')
    var res = document.querySelector('#res')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert('Ta faltando informação aí, corno')
    }else{
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p == 0 ){
            alert('Filho da puta. O passo não pode ser 0 [Considerando passo 1]')
            p = 1
        }
        if(i <= f) {
            res.innerHTML = ('Contagem progressiva: ')
            for (let c =i; c <= f; c += p ){
                res.innerHTML += (`👉${c}`)
            }
        }else{
            res.innerHTML = ('Contagem regressiva: ')
            for (let c= i; c >= f; c -= p){
                res.innerHTML += (`👉${c}`)
            }
        }        
    }
}