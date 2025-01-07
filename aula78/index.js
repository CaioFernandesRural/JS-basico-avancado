function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('seu liso')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/ C: ${this.agencia}/ ${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log('seu liso')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cc1 = new ContaCorrente(11, 21, 0, 100);
cc1.depositar(10)
cc1.sacar(70)