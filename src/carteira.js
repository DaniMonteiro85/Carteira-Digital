class Carteira {

    constructor() {
        this._saldo = 0;
    }

   consultarSaldo() { 
    return this._saldo; 
}

    depositar(valor) { 
        if (valor <= 0 || typeof valor !== 'number') {
            throw new Error('O valor do depósito tem que ser positivo');
        }
        this._saldo += valor;
    }

    gastar(valor) {
        if (valor <= 0 || typeof valor !== 'number') {
            throw new Error('O valor do depósito tem que ser positivo');
        }
        if (valor > this._saldo) {
            throw new Error('Saldo insuficiente');
        }
        this._saldo -= valor;
    }

}
module.exports = Carteira;
