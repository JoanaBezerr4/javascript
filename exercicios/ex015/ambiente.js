let num = [5, 8 ,4 ,9 ]
num.push(3)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`logo.. fica assim ${num}`)
console.log(num.length)
/*for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}*/
for ( let pos in num ){
    console.log(`a posição ${pos} tem o número ${num[pos]}`)
}
console.log(num.indexOf(5))

