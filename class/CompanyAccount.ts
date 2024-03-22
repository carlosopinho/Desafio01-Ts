import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
    }

    getLoan(loanAmount: number): void {
        if (this.validateStatus()) {
            this.deposit();
            console.log(`Você pegou um empréstimo de ${loanAmount}. Seu novo saldo é de ${this.getBalance()}`);
        }
    }


  deposit = (): number => {
    return 2
  }
}