export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number, balance:number){
    this.name = name
    this.accountNumber = accountNumber
    this.balance = balance
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string =>{
    return this.name
  }

  deposit = (depAmount: number): void => {
    if(this.validateStatus()){
      this.balance += depAmount;
      console.log(`Depósito de ${depAmount} realizado. Novo saldo: ${this.balance}`)
    }

  }


  withdraw = (withdrawAmount: number): void => {
    if(this.validateStatus() && withdrawAmount > 0 && this.balance>= withdrawAmount){
      this.balance -= withdrawAmount;
      console.log(`Saque de ${withdrawAmount} Realizado com Sucesso. Seu novo saldo é de ${this.balance}`)
    } else {
      console.log('Saque inválido. Valor menor que o solicitado')
    }
    
  }

  getBalance = (): void => {
    console.log(`Seu saldo é de ${this.balance}`)
  }

   validateStatus = ():boolean =>{
    if(this.status){
      return this.status
    }

    throw new Error('Conta Inválida')
  }
}