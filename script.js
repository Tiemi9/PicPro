//ocultar todos os campos desejados via CSS (display none)
//manter somente a primeira div a mostra via CSS (div selecione pagamento)
//adicionar ID nos botões em HTML
//1...4
//selecionar os botões 
//intercepitar o evento de clique
//recuperar o id adicionado

//selecionando a lista
const listaOpcoes = document.querySelector(".secaoDetalhesdaConta_sobreTransacoes")

//adicionando ecutador de eventos
listaOpcoes.addEventListener("click", identificarOpcoes) 

//executando a ação depois do click
function identificarOpcoes(event) {
 
    //identificando local do click
    const elemento = event.target
    
    //verificando se é li
    if(elemento.tagName == "LI") {
       
    //recuperando o id
    const id = elemento.id  
    
    //selecionando uma seção utilizando o ID (escolha do usuário)
    const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
                 
      //REMOCENDO CLASSE MOSTRAR
      removeClasseMostrar()
    
    //adicionar uma classe (mostrar)
    secaoEscolha.classList.add("mostrar")
    }
}
//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS  
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")

    }
}



