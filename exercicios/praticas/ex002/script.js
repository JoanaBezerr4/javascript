function contar(){
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resp = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('ERRO! Faltam números..')
    } else{
        resp.innerHTML= 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Impossível contar, considerando passo = 1')
            p = 1
        }
        if (i < f){
            for (var c = i; c <= f; c += p){
                resp.innerHTML += ` => ${c}  `
            }
        } else{
            for(var c = i; c >=f; c-= p){
                resp.innerHTML += ` => ${c}  `
            }
        }
        
    }



    /*for (var c = ini; c <= fim; c += passo){
        resp.innerHTML =`${c}`
    }*/
}
