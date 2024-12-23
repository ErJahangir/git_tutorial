var arr = [11, 2, 30, 14, 14, 16, 16, 8, 9, 10];

const counts = {};
for (var i of arr) {
  //   console.log(i);
  counts[i] = counts[i] ? counts[i] + 1 : 1;
}

// for (var i in arr) {
//   console.log({ [i]: arr[i] });
// }
console.log(counts);
