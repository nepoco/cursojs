var agora = new Date()
var horario = agora.getHours()
console.log(`Agora são exatamente ${horario} horas.`)
if (horario < 12){
    console.log('Bom dia, meu amigo')
}else if( horario < 18){
    console.log('Boa tarde, meu amigo')
}else{
    console.log('Boa noite, meu amigo')
}