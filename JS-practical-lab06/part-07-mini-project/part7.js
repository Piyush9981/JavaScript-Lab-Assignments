const wallet = createWallet(500);
const loginGuard = limiter(3);
 
console.log("Starting balance:", wallet.show());
console.log("Added:", wallet.add(200));
 
let attempt = loginGuard();
if (attempt !== "Locked!") {
    console.log("Spend 150:", wallet.spend(150));
}
 
attempt = loginGuard();
if (attempt !== "Locked!") {
    console.log("Spend 1000:", wallet.spend(1000));
}
 
console.log("Final balance:", wallet.show());
console.log("History:", wallet.history());
 
function createWallet(start) {
    let balance = start;
    let records = [];
 
    return {
        add(n) {
            balance += n;
            records.push("Added " + n);
            return balance;
        },
        spend(n) {
            if (n > balance) return "Insufficient balance";
            balance -= n;
            records.push("Spent " + n);
            return balance;
        },
        show() {
            return balance;
        },
        history() {
            return records;
        }
    };
}
 
function limiter(max) {
    let used = 0;
    return function () {
        if (used < max) {
            used++;
            return "Attempt " + used + " of " + max;
        }
        return "Locked!";
    };
}

// Bonus: Add a makeDiscount(percent) factory so const festive = makeDiscount(10); festive(500) gives 450.
function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}
 
const festive = makeDiscount(10);
console.log(festive(500));
