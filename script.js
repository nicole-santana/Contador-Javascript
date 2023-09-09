let cliques = 0

function adicionar(){
    //não prescisa colocar '+1', ele funciona sem
    cliques+= 1
    document.getElementById("count-el").innerText=cliques
}

function salvar() {
    let hist = cliques
    document.getElementById("historico").textContent += hist + " - "
    //não funciona se for innerText
    document.getElementById("count-el").textContent= 0
    //aqui reseta as cliques, sem isso a gente pode salvar o número salvo várias vezes, mesmo que estaja aparecendo um 0
    cliques = 0
}



