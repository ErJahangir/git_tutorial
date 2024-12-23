let str = "my name is jahangir alam";

const str1 = str.split(" ");

console.log(str);
console.log(str1);
const str2 = [];
for (let i of str1) {
  //   console.log(i);
  str2.push(i.charAt(0).toUpperCase() + i.substring(1));
}
console.log(str2.join(" "));
