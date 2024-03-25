let num = document.getElementById('inum')
let frame = document.getElementById('iselec')
let valores = []
function numero(n){
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}
function inlista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if (num.value.length == 0){
        window.alert('ERRO! Digite um número....')
    } else if (num.value > 100){
        window.alert('ERRO! Digite um número entre 1 e 100')
    } else{
        valores.push(Number(num.value))
        let numb = Number(num.value)
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado a lista`
        frame.appendChild(item)
    }
    num.value = ''
    num.focus()
}
function acabar(){
    if (valores.length == 0){
        window.alert('Adicione Valores a essa lista!')
    }else{
        let tot = valores.length
        let res = document.getElementById('res')
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media = soma/tot
            if (valores[pos] > maior){
                maior = valores[pos]
            } 
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}`
        res.innerHTML += `<p>Somando os valores adicionados temos ${soma}`
        res.innerHTML += `<p>A Média entre os valores foi ${media}`
    }
    
}
