var arr = [1, 2, 30, 14, 5, 6, 7, 8, 9, 10];

// for (var i of arr) {
//   console.log(i);
// }

for (var i in arr) {
  console.log({ [i]: arr[i] });
}
