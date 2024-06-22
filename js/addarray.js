// adding array in js

const array = [1, 2, 3];
let ans = 0;

for(let idx=0; idx<array.length; idx++){
    console.log(array[idx]);
    ans += array[idx];
}

console.log(ans);