async function pegarLobo() {
    const resposta = await fetch('http://localhost:3000/lobinhos')
    const lobos = await resposta.json()

    .catch(err => console.log("Erro de solicitação", err));
    console.log(lobos)

    document.querySelector('div.exemplo1 div h4').innerHTML = lobos[0].nome
    document.querySelector('div.exemplo1 div p.idade').innerHTML = `Idade: ${lobos[0].idade} anos`
    document.querySelector('div.exemplo1 div p:not(.idade)').innerHTML = lobos[0].descricao

    document.querySelector('div.exemplo2 div h4').innerHTML = lobos[1].nome
    document.querySelector('div.exemplo2 div p.idade').innerHTML = `Idade: ${lobos[1].idade} anos`
    document.querySelector('div.exemplo2 div p:not(.idade)').innerHTML = lobos[1].descricao
}

pegarLobo()