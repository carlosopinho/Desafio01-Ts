import { DioAccount } from "./DioAccount"

export class DioAccountPlus extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
    }

    enhancedDeposit(enhacedDepAmount: number): void {
        if(this.validateStatus()) {
            const enhancedDeposit = enhacedDepAmount + 10;
            this.deposit(enhancedDeposit);
            console.log(`Você efetuou seu Super depósito no valor de ${enhacedDepAmount} e foram acrescidos 10 reais.`)
        }
        }
        
}