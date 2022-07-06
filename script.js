function calculateSalary(salary, vendas) {

    let comissao = vendas + (vendas * 0.03)
    if (vendas <= 1200) {
        return salary + comissao
    } else {
        let comissaoMaior = comissao + (vendas * 0.05)
        return comissaoMaior + salary
    }
}
// console.log(calculateSalary(1400, 1200))

function cashMachine(saque) {
    let balanco = calculateSalary(1400, 200)
    let notaDe200 = 0
    let notaDe100 = 0
    let notaDe50 = 0
    let resto = balanco - saque

    if (saque !== 0) {
        while (saque >= 200) {
            notaDe200++
            saque -= 200
        }
        while (saque >= 100) {
            notaDe100++
            saque -= 100
        }
        while (saque >= 50) {
            notaDe50++
            saque -= 50
        }
    }
    return `notas de 100: ${notaDe100} notas de 200: ${notaDe200} notas de 50: ${notaDe50} valor restante é: ${resto.toFixed(2)}`
}
// console.log(cashMachine(100))

function calculateStock(inicial, maximo, minimo) {
    let media = (maximo + minimo) / 2
    console.log(media)
    if (inicial >= media) {
        return `Não efetuar compra`
    } else {
        return `Efetuar compra`
    }

}
// console.log(calculateStock(2000,3000,20))

function calculateAge(anoNascimento, anoAtual) {
    let anosIdade = anoAtual - anoNascimento
    let mesesIdade = anosIdade * 12
    let diasIdade = anosIdade * 365
    let semanasIdade = anosIdade * 48
    return `idade: ${anosIdade}, idade em meses: ${mesesIdade}, idade em dias: ${diasIdade}, idade em semanas: ${semanasIdade}`
}
// console.log(calculateAge(1998,2022))

let matriz =
    [[8, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

function getDiagonal(matriz) {
    let contando = matriz.length
    let resultado = []
    for (let i = 0; i< contando; i++){
        resultado.push(matriz[i][i])
    }
    return resultado
}
console.log(getDiagonal((matriz)))