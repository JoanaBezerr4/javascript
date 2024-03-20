function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.getElementById('idia')
    var resp =  document.getElementById('res')
    if (form.value.length == 0 || Number(form.value) > ano){
        window.alert('Ano inválido, tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(form.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 18){
                img.setAttribute('src', 'homem-adulto.jpg')
            } else if (idade > 40){
                img.setAttribute('src', 'homem-idoso.jpg')
            } else if (idade < 18){
                img.setAttribute('src', 'menino.jpg')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 18){
                img.setAttribute('src', 'mulher-adulto.jpg')
            } else if (idade > 40){
                img.setAttribute('src', 'mulher-idoso.jpg')
            } else if (idade < 18){
                img.setAttribute('src', 'menina.jpg')
            }
        }
        
        resp.innerHTML = `Detectamos ${genero}, e sua idade é ${idade} anos`
        resp.appendChild(img)
    }
}