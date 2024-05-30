//number from 1 to 100
// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }

//even number starts from here

// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) console.log("even num = " + i);
// }

//odd number


// for (i = 1; i <= 100; i++) {
//     if (i % 2 != 0) console.log(i);
// }

//no divisible by 2 and 5
console.log("number divisible by 2 and 5");

for (i = 1; i <= 100; i++) {
    if (i % 2 == 0 && i % 5 == 0) console.log(i);
}
