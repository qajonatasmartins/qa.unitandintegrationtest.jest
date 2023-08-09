const { podeBeberBebidaAlcoolica } = require('../../src/Pessoa/Pessoa')


test('Unint Test - deve retornar "Pode Beber" quando maior de idade', () => {
    // Mock da função ehMaiorDeIDade
    const ehMaiorDeIDadeMock = jest.fn()
    ehMaiorDeIDadeMock.mockReturnValue(true)

    // Substituindo a implementação real pela mock
    const originalEhMaiorDeIDade = require('../../src/Pessoa/Pessoa').ehMaiorDeIDade
    require('../../src/Pessoa/Pessoa').ehMaiorDeIDade = ehMaiorDeIDadeMock

    // Testando
    const resultado = podeBeberBebidaAlcoolica(18)
    expect(resultado).toBe('Pode Beber')

    // Restaurando a implementação original
    require('../../src/Pessoa/Pessoa').ehMaiorDeIDade = originalEhMaiorDeIDade
})

test('Unint Test - deve retornar "Não pode beber" quando menor de idade', () => {
    // Mock da função ehMaiorDeIDade
    const ehMaiorDeIDadeMock = jest.fn()
    ehMaiorDeIDadeMock.mockReturnValue(false)

    // Substituindo a implementação real pela mock
    const originalEhMaiorDeIDade = require('../../src/Pessoa/Pessoa').ehMaiorDeIDade
    require('../../src/Pessoa/Pessoa').ehMaiorDeIDade = ehMaiorDeIDadeMock

    // Testando
    const resultado = podeBeberBebidaAlcoolica(17)
    expect(resultado).toBe('Não pode beber')

    // Restaurando a implementação original
    require('../../src/Pessoa/Pessoa').ehMaiorDeIDade = originalEhMaiorDeIDade
})
