let saldoVitorias = partida(61,10)
let rank = ""

function partida(win,loses){
    let calculo = win - loses

    return calculo
}



if(saldoVitorias <= 10){
    rank = "Ferro"
}else if(saldoVitorias <=20){
    rank = "Bronze"
}else if(saldoVitorias <=50){
    rank = "Prata"
}else if(saldoVitorias <=80){
    rank = "Ouro"
}else if(saldoVitorias <=90){
    rank = "Diamante"
}else if(saldoVitorias <=100){
    rank = "Lendário"
}else{
    rank = "Imortal"
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${rank}`)