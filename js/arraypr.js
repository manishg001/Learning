// for a given set of array found averagea

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

// for every indices calculating sum
for (let idx = 0; idx < marks.length; idx++) {
  sum += marks[idx];
}

//average
let average = sum / marks.length;
console.log(average);
