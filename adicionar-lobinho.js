let lobos = JSON.parse(localStorage.getItem('lobos'))
document.querySelector("div.adicionar-lobo button").addEventListener("click", () => {
    if (document.querySelector("input[name='nome']").value == "" || document.querySelector("input[name='idade']").value == "" || document.querySelector("textarea").value == "" || document.querySelector("input[name='link-da-foto']").value == "") {
        window.alert("Dados incompletos")
    } else {
        lobos.push({
            id: lobos.length + 1,
            nome: document.querySelector("input[name='nome']").value,
            idade: parseInt(document.querySelector("input[name='idade']").value),
            descricao: document.querySelector("textarea").value,
            imagem: document.querySelector("input[name='link-da-foto']").value,
            adotado: false
        })
        localStorage.setItem('lobos', JSON.stringify(lobos))
        window.location.href = 'lista-de-lobinhos.html'
    }
})