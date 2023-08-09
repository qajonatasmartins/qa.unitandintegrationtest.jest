const { ehMaiorDeIDade } = require('../../src/Pessoa/Pessoa')

// ehMaiorDeIDade
test('Unit Test - Validar se 17 anos é maior de idade', () => {
    expect(ehMaiorDeIDade(17)).toBe(false)
})

test('Unit Test - Validar se 18 anos é maior de idade', () => {
    expect(ehMaiorDeIDade(18)).toBe(true)
})

test('Unit Test - Validar se 19 anos é maior de idade', () => {
    expect(ehMaiorDeIDade(19)).toBe(true)
})