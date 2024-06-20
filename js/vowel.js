function vowel(n) {
  let count = 0;
  for (const char of n) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count ++;
    }
  }
  return(count);
}

console.log(vowel("manish"));
console.log(vowel("ramesh"));

// vowel by arrow

const vowel2= n =>  {  let count = 0;
  for (const char of n) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count ++;
    }
  }
  return(count);
}


console.log(vowel2("abcd"));