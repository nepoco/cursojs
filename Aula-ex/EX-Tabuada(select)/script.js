function tabuada(){
    let val = document.querySelector('#val')
    let tab = document.querySelector('#seltab')
    tab.innerHTML =''
    if (val.value.length == 0){
        alert('Impossível começar! [Digite um valor]')
        let item = document.createElement('option')
        item.text = 'Aguardando...'
        tab.appendChild(item)
    }else{
        let n = Number(val.value)
        tab.innerHTML =''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n}x${c} = ${n*c}`
            tab.appendChild(item)
            // res.innerHTML += `${n}x${c} = ${n*c}<br>`:
        }
    }
}