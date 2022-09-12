var n = []
var res = document.querySelector('#res')
function adicionar(){
    let txtnum = document.querySelector('#txtnum')
    let sel = document.querySelector('#selnum')
    let num = Number(txtnum.value)
    if (txtnum.value.length == 0 || txtnum.value <= 0 || txtnum.value > 100 || n.indexOf(num) >=0){
        alert('Número inválido ou já adicionado anteriormente')
    }else{
            n.push(num)
            let item = document.createElement('option')
            item.text = `O valor ${num} foi adicionado`
            sel.appendChild(item)
            res.innerHTML =''
        }
    txtnum.value =''
    txtnum.focus()
}
function finalizar(){
    if ( n.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let soma = 0
        let media = 0
        let total = n.length//descobrir o tamanho da array
        let maior = n[0]//descobrir o maior valor da array
        let menor = n[0]//descobrir o menor valor da array
        for (let c in n){
            soma += n[c]
            if (n[c] > maior){//descobrir o maior valor da array
                maior = n[c]
            }
            if (n[c] < menor){//descobrir o menor valor da array
                menor = n[c]
            }
        }
        media = (soma/total)//media dos valores da array
        res.innerHTML =''
        res.innerHTML += (`<br>Ao todo, temos ${total} números cadastrados.`)
        res.innerHTML += (`<br><br>O maior número registrado foi ${maior}`)
        res.innerHTML += (`<br><br>O menor número registrado foi ${menor}`)
        res.innerHTML += (`<br><br>A soma dos valores é ${soma}`)
        res.innerHTML += (`<br><br>A média dos valores é ${media}`)

    }
}
