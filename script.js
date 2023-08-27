let nome = "Nicole"
let greet = "Olá, meu nome é"
let greettwo = ", e esse é o meu primeiro projeto sobre Javascript fora do meu curso técnico"

const mensagem =  greet + " " + nome + " " + greettwo
let mensagemAtual = mensagem + "❤️"

document.getElementById("greeting").innerText = mensagem



let cliques = 0

function adicionar(){
    cliques= cliques+1
    document.getElementById("count-el").innerText=cliques
    
}

function salvar() {
    let hist = cliques
    document.getElementById("historico").innerText= hist
}

