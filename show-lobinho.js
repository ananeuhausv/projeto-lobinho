const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

let lobos = JSON.parse(localStorage.getItem('lobos'))
lobos.forEach(lobo => {
    if (lobo.id == id) {
        document.querySelector(".titulo h2").innerHTML = lobo.nome
        const p = document.createElement('p')
        p.innerHTML = lobo.descricao
        document.querySelector(".textos").innerHTML = ""
        document.querySelector(".textos").append(p)
        if (!lobo.adotado) {
            document.querySelector(".botao1").style.display = "block"
        }
    }
})

function adotar() {
    window.location.href = `adotar-lobinho.html?id=${encodeURIComponent(id)}`
}

function excluir() {
    novosLobos = lobos.filter(lobo => lobo.id != id)
    localStorage.setItem('lobos', JSON.stringify(novosLobos))
    window.location.href = "lista-de-lobinhos.html"
}