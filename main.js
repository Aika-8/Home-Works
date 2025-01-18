console.log("task 1");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
let a = 0;
while (a < 100) {
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
console.log("task 4");
let duo = "Duolingo Green";
let totalizer = 0;
let searchChar = "e";
while (totalizer <= duo.length) {
  const currentChar = duo.charAt(totalizer);
  if (searchChar === currentChar) {
    console.log("Есть такой char");
  }
  totalizer++;
}
for (let totalizer2 = 0; totalizer2 >= duo.length; totalizer2--) {
  const currentChar = duo.charAt(totalizer2);
  if (searchChar === currentChar) {
    console.log("Есть такой char");
  }
}
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
let star = ``;
for (let count1 = 1; count1 <= 6; count1++) {
  for (let vtoroi = 1; vtoroi <= 10; vtoroi++) {
    star = star + `*`;
  }
  star = star + "\n";
}
console.log(star);
let str = ``;
let count2 = 1;
while (count2 <= 6) {
  let second = 1;
  while (second <= 10) {
    str = str + "*";
    second++;
  }
  str = str + "\n";
  count2++;
}
console.log(str);
console.log("task 7");

for (let grid = "#"; grid.length <= 7; grid = grid + "#") {
  console.log(grid);
}

let hash = ``;
while (hash.length <= 7) {
  hash = hash + "#"
  console.log(hash);
}