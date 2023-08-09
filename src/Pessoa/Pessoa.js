function ehMaiorDeIDade(idade) {
    return idade >= 18 ? true : false
}

function podeBeberBebidaAlcoolica(idade) {
    if (ehMaiorDeIDade(idade)) {
        return 'Pode Beber'
    }
    return 'Não pode beber'
}


module.exports = {
    ehMaiorDeIDade,
    podeBeberBebidaAlcoolica
}