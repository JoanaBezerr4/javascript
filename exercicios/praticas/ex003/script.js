function tabuada(){
    var num = document.getElementById('inum')
    var frame = document.getElementById('itabu')
    if (num.value.length == 0){
        window.alert('ERRO! Por favor digite um número...')
    } else{
        var numero = Number(num.value)
        var n = 1
        frame.innerHTML= ''
        while (n <= 10){
            let item = document.createElement('option')
            item.text = `${numero} X ${n} = ${numero*n}`
            frame.appendChild(item)
            n++
        }
    }
}