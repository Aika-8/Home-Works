console.log("task 1");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
let a = 0;
while (a <= 99) {
  a++;
  console.log(a);
}
console.log("task 2");
for (let b = 1; b <= 100; b++) {
  if (b % 2 === 0) console.log(b);
}
let c = 1;
while (c <= 100) {
  c++;
  if (c % 2 === 0) console.log(c);
}
console.log("task 3");

let sum = 0;
for (let d = 1; d <= 100; d++) {
  if (d % 2 === 0) sum = sum + d;
}
console.log(sum);
let sum1 = 0;
let sum2 = 1;
while (sum2 <= 100) {
  sum2++;
  if (sum2 % 2 === 0) sum1 = sum1 + sum2;
}
console.log(sum1);
console.log("task 5");
let word = "Home";
let count = 0;
let reverse = word.length;
while (reverse >= count) {
  console.log(word.charAt(reverse));
  reverse--;
}
let word1 = "Home";
let reverse1 = word1.length;
for (let counter = 0; reverse1 >= counter; reverse1--) {
  console.log(word1.charAt(reverse1));
}
console.log("task 6");
let str = ``;
let count2 = 0;
while (count2 <= 6) {
  let second = 0;
  while (second <= 10) {
    str = str + "*";
    second++;
  }
  str = str + "\n";
  count2++;
}
console.log(str);
