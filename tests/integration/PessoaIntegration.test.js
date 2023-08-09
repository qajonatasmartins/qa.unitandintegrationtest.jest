const { podeBeberBebidaAlcoolica } = require('../../src/Pessoa/Pessoa')


test('Integration Test - deve retornar "Pode Beber" quando maior de idade', () => {
    const resultado = podeBeberBebidaAlcoolica(18)
    expect(resultado).toBe('Pode Beber')
})

// test('Integration Test - deve retornar "Não pode beber" quando menor de idade', () => {
//     const resultado = podeBeberBebidaAlcoolica(17)
//     expect(resultado).toBe('Não pode beber')
// })
