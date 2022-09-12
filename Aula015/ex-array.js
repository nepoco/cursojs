let num = [1,3,5,7,18]
console.log('teste de FOR')
for( i=0;i<=num.length;i++){
    console.log(num[i])
}
console.log('')
console.log('Teste de FOR IN')
for( i in num){
    console.log(num[i])
}
console.log('')
console.log('Teste de índice')
console.log(num.indexOf(1))
let pos = num.indexOf(3)
if (pos == -1){
    console.log('O valor não existe')
}else{
    console.log(`O valor existe e está na posição ${pos}`)
}