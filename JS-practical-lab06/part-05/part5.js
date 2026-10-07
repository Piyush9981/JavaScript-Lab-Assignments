// Task 5.1: Type it. Try to cheat: wallet.balance = 99999; then wallet.show(). Did the money change? Why not?
wallet.balance = 99999;
console.log(wallet.show());

// Task 5.2: Add a reset() function that sets balance back to the starting amount.
function createWallet(start) {
    let balance = start;
    return {
        add(n) { balance += n; return balance; },
        spend(n) {
            if (n > balance) return "Insufficient balance";
            balance -= n;
            return balance;
        },
        show() { return balance; },
        reset() { balance = start; return balance; }
    };
}
 
const wallet = createWallet(100);
wallet.add(50);
console.log(wallet.show());
console.log(wallet.reset());

// Task 5.3 — Login Guard: Complete a closure limiter(max) that allows only max attempts.
function limiter(max) {
    let used = 0;
    return function () {
        if (used < max) {
            used++;
            return "Attempt " + used + " of " + max;
        } else {
            return "Locked!";
        }
    };
}
 
const tryLogin = limiter(3);
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());

// Fun Task 5.4 — "Secret Diary": Create createDiary() with write(text) and read(). The diary entries must be stored in a private array.
function createDiary() {
    let entries = [];
 
    return {
        write(text) {
            entries.push(text);
        },
        read() {
            return entries;
        }
    };
}
 
const diary = createDiary();
diary.write("Learn closures");
diary.write("Practice JavaScript");
 
console.log(diary.read());
console.log(diary.entries);
