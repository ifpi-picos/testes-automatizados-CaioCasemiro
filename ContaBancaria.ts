export default class ContaBancaria {
        private numeroConta:number; //Representa o número da conta bancária.
        private agencia:number; //Representa o número da agência bancária.
        private saldo:number //Armazena o saldo atual da conta.
        private extrato: { data: Date; descricao: string }[] = []; //Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).

        constructor(numeroConta:number, agencia: number, saldoInicial: number = 0){
            this.numeroConta = numeroConta
            this.agencia = agencia
            this.saldo = saldoInicial
            this.registrarOperacao(`Conta criada com saldo inicial de R$${saldoInicial}`)
        }

        private registrarOperacao(descricao: string){
            this.extrato.push({ data: new Date(), descricao })
        }

        depositar(valor: number){
            if(valor > 0){
                this.saldo += valor
                this.registrarOperacao(`Deposito de R$${valor} realizado!`)
            } else{
                console.log('O valor do deposito deve ser positivo!')
            }
        }

        sacar (valor: number){
            if(valor > 0 && valor <= this.saldo ){
                this.saldo -= valor
                this.registrarOperacao(`Saque de R$${valor} realizado`)
            } else{
                console.log('Saque inválido, verifique seu saldo ou o valor informado!')
            }
        }

        

}
