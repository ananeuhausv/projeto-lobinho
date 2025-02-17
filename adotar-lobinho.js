let lobos = JSON.parse(localStorage.getItem('lobos'))
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
let h1 = document.querySelector('div h2')
let p = document.querySelector('div.info-lobo div p')
lobos.forEach(lobo => {
    if (lobo.id == parseInt(id, 10)) {
        h1.innerHTML = lobo.nome
        p.innerHTML = `ID: ${id}`
    }
})

function adotar() {
    if (document.querySelector("input[name='nome']").value == "" || document.querySelector("input[name='idade']").value == "" || document.querySelector("input[name='email']").value == "") {
        window.alert("Dados incompletos")
    } else {
        lobos.forEach(lobo => {
            if (lobo.id == id) {
                lobo.adotado = true
                lobo.nomeDono = document.querySelector("input[name='nome']").value
                lobo.idadeDono = parseInt(document.querySelector("input[name='idade']").value)
                lobo.emailDono = document.querySelector("input[name='email']").value
            }
        })
        localStorage.setItem('lobos', JSON.stringify(lobos))
        window.location.href = "lista-de-lobinhos.html"
    }
}