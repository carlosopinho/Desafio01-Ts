
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { DioAccountPlus } from './class/DioAccountPlus'


const peopleAccount: PeopleAccount = new PeopleAccount(478, 'Carlos', 548785,800)

console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount)
peopleAccount.withdraw(500)


const companyAccount : CompanyAccount = new CompanyAccount ('Dio',985478,590)
console.log(companyAccount)
companyAccount.getLoan(2000)
companyAccount.withdraw(1800)


const dioAccountPlus : DioAccountPlus = new DioAccountPlus ('Eduardo', 15484862,0)
console.log(dioAccountPlus)
dioAccountPlus.enhancedDeposit(1200)
dioAccountPlus.withdraw(400)
