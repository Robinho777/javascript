function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) { 
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#eae04d69'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#a4cf4e69'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#20446369'
    }


}
