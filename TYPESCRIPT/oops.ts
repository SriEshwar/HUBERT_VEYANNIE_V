abstract class Account {            //abstraction
    name: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    abstract withdraw(amount: number): void; 

    deposit(amount: number) {
        this.balance += amount;
        console.log(`${this.name} deposited ${amount}. Current balance: ${this.balance}`);
    }
}

class AccountHolder extends Account {                   // inheritance
    constructor(name: string, balance: number) {
        super(name, balance);
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log('Insufficient balance.');
            return;
        }
        this.balance -= amount;
        console.log(`${this.name} withdrew ${amount}. Current balance: ${this.balance}`);
    }
}

class VIPAccountHolder extends AccountHolder {          // polymorphism
    private static readonly withDrawalLimit = 10000;        // encapsulation

    withdraw(amount: number) {
        if (amount > VIPAccountHolder.withDrawalLimit) {
            console.log(`Withdrawal limit is ${VIPAccountHolder.withDrawalLimit}.`);
            return;
        }
        super.withdraw(amount);
    }
}

let accountHolder = new AccountHolder('Hubert', 5000);
accountHolder.deposit(500);
accountHolder.withdraw(1000);

let vipAccountHolder = new VIPAccountHolder('Veyannie', 20000);
vipAccountHolder.deposit(500);
vipAccountHolder.withdraw(15000);
