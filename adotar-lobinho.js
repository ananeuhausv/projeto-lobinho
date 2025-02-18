let lobos = []
async function pegarLobo() {
    const resposta = await fetch('http://localhost:3000/lobinhos')
    lobos = await resposta.json()

    .catch(err => console.log("Erro de solicitação", err));
    console.log(lobos)

    lobos.forEach(lobo => {
        if (lobo.id == id) {
            h1.innerHTML = lobo.nome
            p.innerHTML = `ID: ${id}`
        }
    })
}

pegarLobo()

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
let h1 = document.querySelector('div h2')
let p = document.querySelector('div.info-lobo div p')

async function adotar() {
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
        
        const response = await fetch(`http://localhost:3000/lobinhos/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    adotado: true,
                    nomeDono: document.querySelector("input[name='nome']").value,
                    idadeDono: parseInt(document.querySelector("input[name='idade']").value),
                    emailDono: document.querySelector("input[name='email']").value
                })
            })
            window.location.href = 'lista-de-lobinhos.html'
        }
}