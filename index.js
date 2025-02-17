async function inicializarLocalStorage() {
    try {
        const response = await fetch('lobinhos.json');
        if (!response.ok) {
            throw new Error(`Erro ao buscar lobinho.json: ${response.statusText}`);
        }
        const lobos = await response.json();
        localStorage.setItem('lobos', JSON.stringify(lobos));
        console.log('Lobos inicializados no localStorage');
    } catch (error) {
        console.error('Erro ao inicializar o localStorage:', error);
    } finally {
        console.log('Tentativa de inicialização do localStorage concluída');
    }
}

if (!localStorage.getItem('lobos')) {
    inicializarLocalStorage().then(() => {
        console.log('Inicialização do localStorage concluída');
    }).catch(error => {
        console.error('Erro durante a inicialização do localStorage:', error);
    });
}

let lobos = JSON.parse(localStorage.getItem('lobos'))

document.querySelector('div.exemplo1 div h4').innerHTML = lobos[0].nome
document.querySelector('div.exemplo1 div p.idade').innerHTML = `Idade: ${lobos[0].idade} anos`
document.querySelector('div.exemplo1 div p:not(.idade)').innerHTML = lobos[0].descricao

document.querySelector('div.exemplo2 div h4').innerHTML = lobos[1].nome
document.querySelector('div.exemplo2 div p.idade').innerHTML = `Idade: ${lobos[1].idade} anos`
document.querySelector('div.exemplo2 div p:not(.idade)').innerHTML = lobos[1].descricao