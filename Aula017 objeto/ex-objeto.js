let amigo = {nome:'birle',
 sexo: 'M',
  peso: 85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}
}
console.log(amigo.engordar(50),amigo.peso)

//teste para o commit