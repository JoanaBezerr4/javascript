function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idia')
    var resp =  document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Ano inválido, tente novamente!')
    }else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - fano
        resp.innerHTML = `Sua idade é ${idade}`
    }
}