let cliques = 0

function adicionar(){
    //não prescisa colocar '+1', ele funciona sem
    cliques+= 1
    document.getElementById("count-el").innerText=cliques
}

function salvar() {
    let hist = cliques
    document.getElementById("historico").textContent += hist + " - "
    document.getElementById("count-el").textContent= 0
}



