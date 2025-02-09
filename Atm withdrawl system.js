function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    balance -= amount;
    return `Withdrawal successful! Your new balance is ${balance}`;
}


let balance = 5000;
let pin = 1234;
let enteredPin = 1234;
let amount = 1500;
console.log(atmWithdrawal(balance, amount, pin, enteredPin));
