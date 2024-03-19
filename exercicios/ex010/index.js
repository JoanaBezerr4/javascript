var idade = 2
console.log(`Você tem ${idade} anos e... : `)
if (idade > 18){
    console.log('Você atingiu a maioridade!')
}else{
    if ( idade > 14 && idade < 18){
        console.log('Você ainda é menor de idade')
    } else{
        console.log('Você é apenas uma criança!!!')
    }
}