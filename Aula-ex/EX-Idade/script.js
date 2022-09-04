function verificar(){
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var ano = document.querySelector('#txtano').value
    var res = document.querySelector('div#res')
    if (ano.length == 0 || ano > anoatual){
        alert('[ERRO] Digite um ano válido')
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = anoatual - ano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade >=18 && idade < 40){
                img.setAttribute('src','homemnovo.png')
            }else if (idade >=40 && idade < 55){
                img.setAttribute('src', 'homemmeia.png')
            }else if(idade >= 55){
                img.setAttribute('src', 'homemvelho.png')
            }else{
                alert('DIGITA UM ANO DIREITO, FILHO DA PUTA')
            }
        }else if (sexo[1].checked) {
            genero = 'Mulher'
            if(idade >=18 && idade < 40){
                img.setAttribute('src','mulhernova.png')
            }else if (idade >=40 && idade < 55){
                img.setAttribute('src','mulhermeia.png')
            }else if(idade >= 55){
                img.setAttribute('src','mulhervelha.png')
            }else{
                alert('DIGITA UM ANO DIREITO, FILHO DA PUTA')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `<p> ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}
