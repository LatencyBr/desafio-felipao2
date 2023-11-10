let saldoVitorias = partidas(20, 10)
let rank = ""

function partidas(win, loses) {
    if (win == loses) {
        return "Empatou"
    } else if (win > loses) {
        return win - loses
    }
}

switch (true) {
    case saldoVitorias <= 10:
        rank = 'Ferro'
        break

    case saldoVitorias <= 20:
        rank = 'Bronze'
        break

    case saldoVitorias <= 50:
        rank = 'Prata'
        break

    case saldoVitorias <= 80:
        rank = 'Ouro'
        break

    case saldoVitorias <= 90:
        rank = 'Diamante'
        break

    case saldoVitorias <= 100:
        rank = 'Lendário'
        break

    case saldoVitorias > 100:
        rank = 'Imortal'
        break
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${rank}`)