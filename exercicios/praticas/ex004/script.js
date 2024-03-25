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
    let numb = Number(num.value)
    if (num.value.length == 0){
        window.alert('ERRO! Digite um número....')
    } else if (num.value > 100){
        window.alert('ERRO! Digite um número entre 1 e 100')
    } else{
        let numb = Number(num.value)
        let item = document.createElement('option')
        item.text = `O número ${numb} foi adicionado a lista`
        frame.appendChild(item)
        let lista = [numb]
    }
}
function acabar(){
    let res = document.getElementById('res')
    res.innerHTML = `Ao todo temos ${lista.length + 1} itens na lista`
}
document.section.style.heigth ='300px'