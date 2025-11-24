// const test = require('node:test');
let calcular = require('./calculadora');

describe("Funções de cálculo.", function () {
    test('Soma', function(){
        expect(calcular.somar(5,15)).toBe(20)    
    })

    test('Subtração', function(){
        expect(calcular.subtrair(20,3)).toBe(17)
    })

    test('Multiplicação', function(){
        expect(calcular.multiplicar(7,7)).toBe(49)
    })

    test('Divisão', function(){
        expect(calcular.dividir(15,3)).toBe(5)
    })

    test('Potenciação', function(){
        expect(calcular.potencia(4,2)).toBe(16)
    })

    test('Média', function(){
        expect(calcular.media(5,25)).toBe(15)
    })

    test('Porcentagem', function(){
        expect(calcular.porcentagem(200,10)).toBe(20)
    })
})