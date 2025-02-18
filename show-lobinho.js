const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

let lobos = []

function adotar() {
    window.location.href = `adotar-lobinho.html?id=${encodeURIComponent(id)}`
}
async function excluir() {
    const response = await fetch(`http://localhost:3000/lobinhos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    novosLobos = lobos.filter(lobo => lobo.id != id)
    localStorage.setItem('lobos', JSON.stringify(novosLobos))
    window.location.href = "lista-de-lobinhos.html"
}

async function pegarLobo() {
    const resposta = await fetch('http://localhost:3000/lobinhos')
    lobos = await resposta.json()

    .catch(err => console.log("Erro de solicitação", err));
    console.log(lobos)

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
}

pegarLobo()