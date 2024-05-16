export class AccountHolder {
    accountNumber: number;
    acHolderName: string;
    typeOfAccount: string;
    amount: number;
    date: string; // or Date if you prefer date objects
    bankName: string;

    constructor(accountNumber: number, acHolderName: string, typeOfAccount: string, amount: number, date: string, bankName: string) {
        this.accountNumber = accountNumber;
        this.acHolderName = acHolderName;
        this.typeOfAccount = typeOfAccount;
        this.amount = amount;
        this.date = date;
        this.bankName = bankName;
    }
}