let cliques = 0

function adicionar(){
    cliques= cliques+1
    document.getElementById("count-el").innerText=cliques
    
}

function salvar() {
    console.log(cliques)
}

let username ="nick"
let message="new!"

console.log(username,"vc tem uma notificação", message)