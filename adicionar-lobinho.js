let lobos = []
async function pegarLobo() {
    const resposta = await fetch('http://localhost:3000/lobinhos')
    lobos = await resposta.json()

    .catch(err => console.log("Erro de solicitação", err));
    console.log(lobos)
}

document.querySelector("div.adicionar-lobo button").addEventListener("click", () => {
    if (document.querySelector("input[name='nome']").value == "" || document.querySelector("input[name='idade']").value == "" || document.querySelector("textarea").value == "" || document.querySelector("input[name='link-da-foto']").value == "") {
        window.alert("Dados incompletos")
    } else {
        const response = fetch('http://localhost:3000/lobinhos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: document.querySelector("input[name='nome']").value,
                idade: parseInt(document.querySelector("input[name='idade']").value),
                descricao: document.querySelector("textarea").value,
                imagem: document.querySelector("input[name='link-da-foto']").value,
                adotado: false
            })
        })
        window.location.href = 'lista-de-lobinhos.html'
    }
})