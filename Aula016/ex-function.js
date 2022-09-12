function parimp(n){
    if (n%2 ==0){
        // return console.log(`O número ${n} é par`)
        return 'par'
    }else{
        //  console.log(`O número ${n} é impar`)
        return 'impar'
    }
}

console.log(parimp(1))

function soma(n1,n2){
    return n1+n2
}
console.log(`A soma é ${soma(5,6)}`)
console.log(`A soma é ${soma(9,15)}`)
console.log(`A soma é ${soma(23,10)}`)

function fatorial(n){
    let res = 1
    for (n;n> 1; n--){
        res = res * n
    }
    return res
}
console.log(fatorial(5))

//RECURSIVIDADE
function fatorialrec(n){
    if (n == 1){
        return 1
    }else {
        return (n * fatorialrec(n-1))
    }
}
console.log(fatorialrec())