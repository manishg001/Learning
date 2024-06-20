let n = 5;
let string = "";
for (let i = 1; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
        string += n-j-i+2;
    }
    string += "/n";
}
console.log(string);