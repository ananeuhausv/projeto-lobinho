const objetosPorPagina = 4
let paginaAtual = 1
let totalPaginas = null

function anterior() {
    if (paginaAtual > 1) {
        paginaAtual--
        listar()
    }
}

function proximo() {
    const totalPaginas = Math.ceil(lobos.length / objetosPorPagina);
    if (paginaAtual < totalPaginas) {
        paginaAtual++
        listar()
    }
}

function listar() {
    paginas = document.querySelector(".paginas")
    paginas.style.display = "block"
    lista.innerHTML = ""
    const adotados = document.querySelector("#mostrar-adotados")
    const inicio = (paginaAtual - 1) * objetosPorPagina
    const fim = inicio + objetosPorPagina
    let lobosFiltrados = []
    lobos.forEach(lobo => {
        if ((adotados.checked && lobo.adotado) || (!adotados.checked)) {
            if (lobo.nome.toUpperCase().includes(nome.toUpperCase())) {
                lobosFiltrados.push(lobo)
            }}
    })
    totalPaginas = Math.ceil(lobosFiltrados.length / objetosPorPagina)
    lobosPagina = lobosFiltrados.slice(inicio, fim)
    const modeloEsquerda = document.querySelector("#modeloEsquerda")
    const modeloDireita = document.querySelector("#modeloDireita")
    let divLobo = ""
    
    lobosPagina.forEach((lobo, index) => {
        if (index % 2 == 0 || index == 0) {
            divLobo = modeloEsquerda.cloneNode(true)
        } else {
            divLobo = modeloDireita.cloneNode(true)
        }
        divLobo.style.display = "flex"

        divLobo.querySelector("h4").innerHTML = lobo.nome
        divLobo.querySelector(".idade").innerHTML = `Idade: ${lobo.idade} anos`
        divLobo.querySelector("p:not(.idade)").innerHTML = lobo.descricao
        let botao = divLobo.querySelector("button")
        let dono = divLobo.querySelector(".adotado")
        if (lobo.adotado) {
            botao.style.backgroundColor = "#7AAC3A"
            botao.innerHTML = "Adotado"
            botao.addEventListener('click', () => {
                window.location.href = `show-lobinho.html?id=${encodeURIComponent(lobo.id)}`
            })
            dono.style.display = "block"
            dono.innerHTML = `Adotado por: ${lobo.nomeDono}`
        } else {
            botao.style.backgroundColor = "#DEB959"
            botao.style.cursor = "pointer"
            botao.innerHTML = "Adotar"
            botao.addEventListener('click', () => {
                window.location.href = `show-lobinho.html?id=${encodeURIComponent(lobo.id)}`
            })
        }
        lista.append(divLobo)
    })
    lista.append(paginas)
    atualizarNumerosPagina()
}

function atualizarNumerosPagina() {
    const numerosPagina = document.querySelector(".paginas p")
    numerosPagina.innerHTML = ""
  
    if (paginaAtual > 3) {
        numerosPagina.innerHTML += `<span onclick="irParaPagina(1)">1</span> ... `
    }
  
    for (let i = Math.max(1, paginaAtual - 2); i <= Math.min(totalPaginas, paginaAtual + 2); i++) {
        const span = document.createElement("span")
        span.setAttribute("onClick", `javascript: irParaPagina(${i})`)
        span.textContent = i
        span.style.marginRight = "0.5em"
        if (i === paginaAtual) {
            span.classList.add("pagina-atual")
            span.style.backgroundColor = "#DEB959"
        }
        numerosPagina.appendChild(span)
    }
  
    if (paginaAtual < totalPaginas - 2) {
      numerosPagina.innerHTML += ` ... <span onclick="irParaPagina(${totalPaginas})">${totalPaginas}</span>`
    }
  }

  function irParaPagina(pagina) {
    paginaAtual = pagina
    listar();
  }

let lobos = JSON.parse(localStorage.getItem('lobos'))
console.log(lobos.length)
let lista = document.querySelector(".lobos-exemplos")
const urlParams = new URLSearchParams(window.location.search)
let nome = urlParams.get('nome')
if (nome == null) {
    nome = ""
} else {
    const input = document.querySelector("#search")
    input.value = nome
}
const adotados = document.querySelector("#mostrar-adotados")
adotados.addEventListener("click", () => {
    listar()
})
listar()