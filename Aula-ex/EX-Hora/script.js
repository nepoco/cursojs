function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //hora = prompt('Que horas são agora?[DIGITE APENAS AS HORAS]')
    //minuto = prompt('Digite os minutos')
    msg.innerHTML = `São exatamente ${hora}:${minuto} horas.`
    if (hora >= 00 && hora < 12){
        document.body.style.background= '#c5e9fe'
        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'fotomanha.png'
    }else if (hora >= 12 && hora < 18){
        document.body.style.background='#e4c292'
        msg.innerHTML += '<p>Boa tarde!</p>'
        img.src = 'fototarde.png'
    }else {
        document.body.style.background='#42324f'
        msg.innerHTML += '<p>Boa noite</p>'
        img.src= 'fotonoite.png'
    }
}

