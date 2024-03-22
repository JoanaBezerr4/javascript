function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var resp = document.getElementById('res')
    for (var c = ini; c <= fim; c += passo){
        resp.innerHTML =`${c}`
}
}
