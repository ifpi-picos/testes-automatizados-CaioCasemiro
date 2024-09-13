export default class ContaBancaria {
        private numeroConta:number;
        private agencia:number;
        private saldo:number
        private extrato:string[]

        constructor(numeroConta:number, agencia: number, saldo: number, extrato:string[]){
            this.numeroConta = numeroConta
            this.agencia = agencia
            this.saldo = saldo
            this.extrato = extrato
        }

        
}
