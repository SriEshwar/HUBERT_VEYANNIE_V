class Account {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.accountHolder}'s account: Deposited $${amount}. Current balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${this.accountHolder}'s account: Withdrew $${amount}. Current balance: $${this.balance}`);
        } else {
            console.log(`Insufficient funds for ${this.accountHolder}.`);
        }
    }
}

// Create account holders
const person1 = new Account(2431, 'Natasha', 5000);
const person2 = new Account(3105, 'Thor', 1000);
const person3 = new Account(1342, 'Tony Stark', 9000)

// Perform transactions
person1.deposit(300);
person2.withdraw(200);
person3.withdraw(1500); 

// Display final balances
console.log('Final balances:');
console.log(`${person1.accountHolder}: $${person1.balance}`);
console.log(`${person2.accountHolder}: $${person2.balance}`);
console.log(`${person3.accountHolder}: $${person3.balance}`);
