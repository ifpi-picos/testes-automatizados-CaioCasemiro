export default class ContaBancaria {
        public numeroConta:number; //Representa o número da conta bancária.
        public agencia:number; //Representa o número da agência bancária.
        public saldo:number //Armazena o saldo atual da conta.
        public extrato:string[] //Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).

        constructor(numeroConta:number, agencia: number, saldo: number, extrato:string[]){
            this.numeroConta = numeroConta
            this.agencia = agencia
            this.saldo = saldo
            this.extrato = extrato
        }

        public depositar(){
            
        }
}
