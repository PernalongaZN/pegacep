function ColetarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    Dados(cep)
}

//

async function Dados(cep) {
   let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json()) 
   console.log(dados)
   dadosTela(dados)
}

//Permuta dos dados na tela

function dadosTela(dados) {
    document.querySelector("#end").value = dados.logradouro
}