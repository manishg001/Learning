function sumofdigit(n) {
  n = Math.abs(n); // to take absoulte value
  let sum = 0;
  while (n != 0) {
    let digit = n % 10;
    n = Math.floor(n / 10); //taking floor value
    sum += digit;
  }
  return sum;
}

console.log(sumofdigit(-19));
