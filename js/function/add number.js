function sumofdigit(n) {
    let sum = 0;
    while (n != 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        sum += digit;
    }
    return sum;
}

console.log(sumofdigit(123));