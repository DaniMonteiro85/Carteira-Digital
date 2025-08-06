const assert = require('assert');
const Carteira = require('../Carteira');

describe('Carteira', function () {
  let carteira;

  beforeEach(() => {
    carteira = new Carteira();
  });

  describe('consultarSaldo', function () {
    it('deve retornar 0 ao criar uma nova carteira', function () {
      assert.strictEqual(carteira.consultarSaldo(), 0);
    });
  });

  describe('depositar', function () {
    it('deve aumentar o saldo ao depositar valor positivo', function () {
      carteira.depositar(100);
      assert.strictEqual(carteira.consultarSaldo(), 100);
    });

    it('deve lançar erro ao depositar valor negativo', function () {
      assert.throws(() => carteira.depositar(-50), /O valor do depósito tem que ser positivo/);
    });

    it('deve lançar erro ao depositar valor não numérico', function () {
      assert.throws(() => carteira.depositar("dez"), /O valor do depósito tem que ser positivo/);
    });
  });

  describe('gastar', function () {
    it('deve diminuir o saldo ao gastar valor válido', function () {
      carteira.depositar(100);
      carteira.gastar(40);
      assert.strictEqual(carteira.consultarSaldo(), 60);
    });

    it('deve lançar erro ao gastar valor negativo', function () {
      assert.throws(() => carteira.gastar(-10), /O valor do depósito tem que ser positivo/);
    });

    it('deve lançar erro ao gastar valor não numérico', function () {
      assert.throws(() => carteira.gastar("vinte"), /O valor do depósito tem que ser positivo/);
    });

    it('deve lançar erro ao gastar mais do que o saldo disponível', function () {
      carteira.depositar(50);
      assert.throws(() => carteira.gastar(100), /Saldo insuficiente/);
    });
  });

  describe('saldo após operações', function () {
    it('deve retornar o saldo correto após vários depósitos e gastos', function () {
      carteira.depositar(200);
      carteira.gastar(50);
      carteira.depositar(100);
      carteira.gastar(75);
      assert.strictEqual(carteira.consultarSaldo(), 175);
    });
  });
});
