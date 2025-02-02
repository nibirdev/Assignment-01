class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {

        console.log(`displayAccountInfo: `);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Nibir",700);

// Demonstrate functionality
account1.deposit(200);
account1.withdraw(300);
account1.displayAccountInfo();
console.log("\n");

account2.deposit(100);
account2.withdraw(600);
account2.displayAccountInfo();
